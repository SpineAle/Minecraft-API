import React from 'react';
import './Informazioni.css';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom'

const Informazioni = () => {
   let naviga=useNavigate()
    const apri=()=>{
      naviga('/')
    }
    const apri2=(codice)=>{
      naviga('/spiegazionefiltri',{state:{ "elemento": codice }})
    }
  return (
    <div>
		<Navbar/>
		<div className='container'>
		<h1>Informazioni sul progetto</h1>
      
      <div className="info">
        <div className="intro animazione">
          <strong>Ciao!</strong> Mi chiamo <strong>Spinedoni Alessio</strong> e sono uno studente della classe <strong>4L Informatica</strong> dell'ITIS Rivoira.
        </div>

        <div className="descrizione animazione">
          Ho creato un progetto utilizzando un'API di Minecraft gratuita che non richiede alcun tipo di login o chiave di accesso. 
          Il mio obiettivo era costruire un'applicazione che consenta agli utenti di esplorare e ordinare i vari blocchi di Minecraft in modo semplice e intuitivo.
        </div>

        <div className="dettagli animazione delay-1">
          Il progetto si basa su un'interfaccia utente che comunica con l'API per ottenere informazioni sui blocchi di Minecraft. 
          Ogni blocco è rappresentato da un'immagine e un nome. Gli utenti hanno la possibilità di:
          <div className="ordine animazione delay-2" style={{marginTop: '10px'}} onClick={()=>{apri2('Ordinare i blocchi alfabeticamente in ordine crescente.')}}>
            - Ordinare i blocchi alfabeticamente in ordine crescente.
          </div>
          <div className="ordine animazione delay-3" onClick={()=>{apri2('Ordinare i blocchi alfabeticamente in ordine decrescente.')}}>
            - Ordinare i blocchi alfabeticamente in ordine decrescente.
          </div>
          <div className="ordine animazione delay-4" onClick={()=>{apri2('Filtrare i blocchi secondo la luminosità selezionata tramite uno slider.')}}>
            - Filtrare i blocchi secondo la luminosità selezionata tramite uno slider.
          </div>
          <div className="ordine animazione delay-5" onClick={()=>{apri2('Filtrare i blocchi secondo la resistenza selezionata tramite uno slider.')}}>
            - Filtrare i blocchi secondo la resistenza selezionata tramite uno slider.
          </div>
          <div className="ordine animazione delay-6" onClick={()=>{apri2('Filtrare i blocchi secondo lo strumento migliore per spaccarlo tramite un menù a tendina.')}}>
            - Filtrare i blocchi secondo lo strumento migliore per spaccarlo tramite un menù a tendina.
          </div>
          <div className="ordine animazione delay-7" onClick={()=>{apri2('Filtrare i blocchi trasparenti da quelli non trasparenti.')}}>
          - Filtrare i blocchi trasparenti da quelli non trasparenti.
          </div>
          <div className="ordine animazione delay-8" style={{marginBottom:'-10px'}} onClick={()=>{apri2('Ripristinare la visualizzazione originale dei blocchi, annullando i filtri applicati.')}}>
            - Ripristinare la visualizzazione originale dei blocchi, annullando i filtri applicati.
          </div>
        </div>

        <div className="obbiettivo animazione delay-9">
          Il mio obiettivo principale è stato quello di creare una soluzione che fosse facile da usare, senza complicazioni legate alla necessità di registrazione o autenticazione. 
          Così facendo, ho reso accessibile a tutti l'intera esperienza, che permette di esplorare i blocchi di Minecraft in modo interattivo.
        </div>
        <div className='obbiettivo animazione delay-10'>
          <strong>Componenti presenti nel mio progetto:</strong>
        </div>
          <div className="ordine animazione delay-11">
              - Componente App.js utilizzato per l'elenco dei componenti presenti utilizzando le Route di react-router-dom.
          </div>
          <div className="ordine animazione delay-12">
              - Componente Blocchi.js utilizzato per la tabella contenente tutti i blocchi presenti in minecraft con appositi bottoni per filtrare la tabella come si vuole.
          </div>
          <div className="ordine animazione delay-13">
              - Componente descrizioneblocchi.js è il componente che tramite passaggio di parametro permette la visualizzazione di tutte le caratteristiche del blocco desiderato
          </div>
          <div className="ordine animazione delay-14">
              - Componente Navbar.js utilizzato per creare una bella e funzionale barra di navigazione che permette di visualizzare i diversi componenti.
          </div>
          <div className="ordine animazione delay-15">
              - Componente Informazioni.js è il componente attualmente in visualizzazione e permette di leggere le varie documentazioni legate a questo progetto.
          </div>
          <div className="ordine animazione delay-16">
              - Componente DescrizioneFiltri.js è il componente che mostra tutta la documentazione legata al codice correlato a ciò che è desiderato vedere con commenti efficaci e intuitivi
          </div>
          <div className="ordine animazione delay-17">
              - Componente Errore.js è il componente che permette la visualizzazione di un messaggio di errore nel caso in cui l'utente digiti un url errato o non presente nella nostra pagina.
          </div>


        <div className="conclusione animazione delay-18">
          Questo progetto è stato un'opportunità per mettere in pratica le competenze acquisite in tpsit, utilizzando un'API pubblica, implementando funzionalità di filtraggio, ordinamento e gestione dei dati. Sono molto soddisfatto del risultato e spero che il progetto possa essere utile o divertente per chiunque desideri esplorare il mondo di Minecraft!
        </div>
        <div className='bottone'>
            <input type='button' value='Torna alla home' onClick={apri} className='bottone-home animazione delay-10'/>
          </div>
      </div>
		</div>
	 </div>
  );
};

export default Informazioni;
