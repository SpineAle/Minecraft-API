import React, {useState,useEffect} from 'react'
import "./DescrizioneBlocchiTabella.css"
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2';

const DescrizioneBlocchiTabella = () => {
	const [blocchi, setBlocchi] = useState([])
		const [blocchiOriginali, setBlocchiOriginali] = useState([])
		const [controllaTrasparenza, setControllaTrasparenza] = useState(false)
		const [controllaNonTrasparenza, setControllaNonTrasparenza] = useState(false)
		const [ricerca, setRicerca] = useState('')
		const [illumina, setIllumina] = useState(0)
		const [resistenza, setResistenza] = useState(0)
		const [ordineAlfabetico, setOrdineAlfabetico] = useState(true)
		const [ordineNonAlfabetico, setOrdineNonAlfabetico] = useState(false)
		const [toolSelezionato, setToolSelezionato] = useState('Seleziona uno strumento')

		useEffect(() => {
				 fetch('https://minecraft-api.vercel.app/api/blocks')
					.then((risposta) => risposta.json())
					 .then((data) => {
						setBlocchi(data);
						setBlocchiOriginali(data);
				});
			  }, []);

		let apri=useNavigate()
		
			  const dettaglio=(codice)=>{
				apri("/descrizioneblocchi",{state:{ "elemento": codice }} )
			  }
		
			  const ordinaAlfabetico = () => {
				if(ordineAlfabetico===true){
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "I blocchi sono già ordinati in modo crescente alfabetico!",
					 });
				} else {
					setOrdineNonAlfabetico(false)
					setOrdineAlfabetico(true)
					let blocchiOrdinati = [...blocchi];
					blocchiOrdinati.sort((blocco1, blocco2) => {
					if (blocco1.name < blocco2.name){
						return -1;
					}
					if (blocco1.name > blocco2.name){
						return 1;
					}
					return 0;
					});
					setBlocchi(blocchiOrdinati);
				}
			 };
		  
			 const ordinaAlfabeticoDecrescente = () => {
				if(ordineNonAlfabetico===true){
					Swal.fire({
						icon: "error",
						title: "Oops...",
						text: "I blocchi sono già ordinati in modo decrescente alfabetico!",
					 });
				} else {
					setOrdineNonAlfabetico(true)
					setOrdineAlfabetico(false)
					let blocchiOrdinati = [...blocchi];
					blocchiOrdinati.sort((blocco1, blocco2) => {
					if (blocco1.name < blocco2.name){
						return 1;
					}
					if (blocco1.name > blocco2.name){
						return -1;
					}
					return 0;
					});
					setBlocchi(blocchiOrdinati);
				}
			 };
		
			 const controlloTrasparenza = () => {
				if (controllaTrasparenza === false && controllaNonTrasparenza === false) {
				  ordinaTrasparente();
				  setControllaTrasparenza(true);
				} else if (controllaTrasparenza === true) {
				  setBlocchi(blocchiOriginali);
				  setControllaTrasparenza(false);
				} else if (controllaTrasparenza === false && controllaNonTrasparenza === true) {
				  Swal.fire({
					 icon: "error",
					 title: "Oops...",
					 text: "Non puoi attivare il filtro trasparenza e non trasparenza contemporaneamente!",
					 footer:"Prova a disattivare il filtro di non trasparenza"
				  });
				}
			 };
			 
			 const controlloNonTrasparenza = () => {
				if (controllaNonTrasparenza === false && controllaTrasparenza === false) {
				  ordinaNonTrasparente();
				  setControllaNonTrasparenza(true);
				} else if (controllaNonTrasparenza === true) {
				  setBlocchi(blocchiOriginali);
				  setControllaNonTrasparenza(false);
				} else if (controllaNonTrasparenza === false && controllaTrasparenza === true) {
				  Swal.fire({
					 icon: "error",
					 title: "Oops...",
					 text: "Non puoi attivare il filtro trasparenza e non trasparenza contemporaneamente!",
					 footer:"Prova a disattivare il filtro di trasparenza"
				  });
				}
			 };
		
			 const ordinaTrasparente=()=>{
				let blocchiTrasparenti=[]
				blocchi.map((elemento,indice)=>{
					if (elemento.transparent === true) {
						blocchiTrasparenti.push(elemento);
					 }
					 
				})
				setBlocchi(blocchiTrasparenti);
			 }
		
			 const ordinaNonTrasparente=()=>{
				let blocchiNonTrasparenti=[]
				blocchi.map((elemento,indice)=>{
					if (elemento.transparent === false) {
						blocchiNonTrasparenti.push(elemento);
					 }
					 
				})
				setBlocchi(blocchiNonTrasparenti);
			 }
		
			 const stileTrasparenza=()=> {
				return{
					color: controllaTrasparenza ? "green" : "red",
				}
			 };
		
			 const stileNonTrasparenza=()=> {
				return{
					color: controllaNonTrasparenza ? "green" : "red",
				}
			 };
		
		
			 const annulla=()=>{
				setBlocchi(blocchiOriginali)
				setIllumina(0);
				setControllaTrasparenza(false)
				setControllaNonTrasparenza(false)
				setResistenza(0)
				setToolSelezionato('Seleziona uno strumento')
			 }
		
			 const filtraBlocchi = (event) => {
				if(event.target.value===''){
					setBlocchi(blocchiOriginali)
					setRicerca('');
				} else {
				setRicerca(event.target.value);
				const filtro = event.target.value.toLowerCase();
				const blocchiFiltrati = blocchi.filter((blocco) =>
				  blocco.name.toLowerCase().includes(filtro)
				);
				setBlocchi(blocchiFiltrati);
				}
			 }
		
			 const cambiamentoLuminosita = (event) => {
				setIllumina(Number(event.target.value))
				let variabile=Number(event.target.value)
				if(variabile===0){
					setBlocchi(blocchiOriginali)
				} else {
				filtroLuminosita(Number(event.target.value));
				}
			 };
		
			 const filtroLuminosita=(numero)=>{
				let blocchiLuminati=[]
				blocchi.map((elemento,indice)=>{
					if(elemento.luminance>=numero){
						blocchiLuminati.push(elemento)
					}
				})
				if(blocchiLuminati.length>0){
					setBlocchi(blocchiLuminati)
				}
			 }
		
			 const cambiamentoResistenza = (event) => {
				setResistenza(Number(event.target.value))
				let variabile=Number(event.target.value)
				if(variabile===0){
					setBlocchi(blocchiOriginali)
				} else {
					filtroResistenza(Number(event.target.value));
				}
			 };
		
			 const filtroResistenza=(numero)=>{
				let blocchiResistenti=[]
				blocchi.map((elemento,indice)=>{
					if(elemento.blastResistance>=numero){
						blocchiResistenti.push(elemento)
					}
				})
				if(blocchiResistenti.length>0){
					setBlocchi(blocchiResistenti)
				}
			 }
		
			 const filtraPerTool = (event) => {
				let toolSel = event.target.value;
				setBlocchi(blocchiOriginali)
				if(toolSel==='Seleziona uno strumento'){
					annulla()
				}
				let blocchiTool=[]
				setToolSelezionato(toolSel);
				blocchi.map((elemento,indice)=>{
					if(elemento.tool===toolSel){
						blocchiTool.push(elemento)
					}
				})
				if(blocchiTool.length>0){
					setBlocchi(blocchiTool)
				}
			 };

  return (
	 <div>
		<Navbar/>
		<div className='bottoni-alfa'>
		<div className="ordinamento-pulsante">
          <input type="text" value={ricerca} onChange={filtraBlocchi} placeholder="Cerca un blocco..." className="barra-ricerca"/>
        </div>
		<div className="ordinamento-pulsante" onClick={ordinaAlfabetico} title="Ordina per Nome Crescente" style={{border: '1px solid black', borderRight:'0px'}}>
		<div className='testo'>ordinamento</div>
			<i className="fas fa-sort-alpha-down" style={{ fontSize: '30px' }}></i>
			<br/>
			<div className='testo'>crescente</div>
		</div>

		<div className="ordinamento-pulsante" onClick={ordinaAlfabeticoDecrescente} title="Ordina per Nome Crescente" style={{borderRight: '1px solid black', borderLeft:'0px'}}>
		<div className='testo'>ordinamento</div>
			<i className="fas fa-sort-alpha-up" style={{ fontSize: '30px' }}></i>
			<br/>
			<div className='testo'>decrescente</div>
		</div>

		<div className="ordinamento-pulsante" title="slider-luminosita" style={{borderRight: '1px solid black', borderLeft:'0px'}}>
		<div className='testo'>Luminosità minima</div>
		<input type="range" className='input-luminosita' min="0" max="15" step="1" value={illumina} onChange={cambiamentoLuminosita} />
			<br/>
			<div className='testo'>{illumina}</div>
		</div>

		<div className="ordinamento-pulsante" title="slider-resistenza" style={{borderRight: '1px solid black', borderLeft:'0px'}}>
		<div className='testo'>resistenza minima</div>
		<input type="range" className='input-resistenza' min="0" max="1500" step="10" value={resistenza} onChange={cambiamentoResistenza} />
			<br/>
			<div className='testo'>{resistenza}</div>
		</div>

		<div className="ordinamento-pulsante" title="menu-tool" style={{borderRight: '1px solid black', borderLeft:'0px'}}>
		<div className='testo'>Attrezzi disponibili</div>
		<select id="tool-select" onChange={filtraPerTool} value={toolSelezionato}>
          <option value="">Seleziona uno strumento</option>
          <option value="Pickaxe">Pickaxe(piccone)</option>
          <option value="Axe">Axe(ascia)</option>
          <option value="Shovel">Shovel(pala)</option>
          <option value="Hoe">hoe(zappa)</option>
			 <option value="Shears">Shears(cesoie)</option>
        </select>
			<br/>
			<div className='testo'></div>
		</div>

		<div className="ordinamento-pulsante" onClick={controlloTrasparenza} title="Ordina per Nome Crescente" style={stileTrasparenza()}>
		<div className='testo'>Trasparenti</div>
		<i class="bi bi-aspect-ratio-fill" style={{ fontSize: '25px' }}></i>
			<br/>
			<div className='testo'>True</div>
		</div>

		<div className="ordinamento-pulsante nTrasp" onClick={controlloNonTrasparenza} title="Ordina per non trasparenza"  style={stileNonTrasparenza()}>
		<div className='testo'>Trasparenti</div>
		<i class="bi bi-aspect-ratio" style={{ fontSize: '25px' }}></i>
			<br/>
			<div className='testo'>False</div>
		</div>

		<div className="ordinamento-pulsante" onClick={annulla} title="Annulla">
		<div className='testo'>Annulla</div>
			<i class="bi bi-arrow-clockwise" style={{ fontSize: '25px' }}></i>
			<br/>
			<div className='testo'>filtri</div>
		</div>
		
          
		</div>

		<div className='container'>
			<div className="blocchi-container row">
			{blocchi.map((elemento,indice) => (
				<div key={indice} className="blocco col-4" onClick={()=>{dettaglio(elemento)}}>
					<img src={elemento.image} alt={elemento.name} style={{ width: '100px', height: '100px' }} />
					<div className='nome'>{elemento.description}</div>
				</div>
			))}
			</div>
		</div>
	 </div>
  )
}

export default DescrizioneBlocchiTabella