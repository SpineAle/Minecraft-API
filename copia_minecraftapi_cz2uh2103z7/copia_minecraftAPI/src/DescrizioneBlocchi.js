import React from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import "./DescrizioneBlocchi.css"
import Navbar from './Navbar';
const DescrizioneBlocchi = () => {
  const { state } = useLocation();
  const { elemento } = state;

    let naviga=useNavigate()
  const apri=()=>{
    naviga('/')
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className='titolo'>Dettaglio del Blocco: {elemento.name}</div>
        <img
          src={elemento.image}
          alt={elemento.name}
          style={{ width: '200px', height: '200px' }}
          className='animazione delay-2'
        />
        <div>
          <div className='desc animazione delay-3'><strong>Nome:</strong> {elemento.name}</div>
          <div className='desc animazione delay-4'><strong>Descrizione:</strong> {elemento.description}</div>
          <div className='desc animazione delay-5'><strong>Migliore strumento per spaccarlo:</strong> {elemento.tool}</div>
          <div className='desc animazione delay-6'><strong>Trasparente:</strong> {elemento.transparent ? 'Sì' : 'No'}</div>
          <div className='desc animazione delay-7'><strong>Luce prodotta:</strong> {elemento.luminance} blocchi</div>
          <div className='desc animazione delay-8'><strong>Resistenza alle esplosioni:</strong> {elemento.blastResistance} blocchi</div>
          <div className='desc animazione delay-9'><strong>Infiammabile:</strong> {elemento.flammable ? 'Sì' : 'no'}</div>
          <div className='bottone'>
            <input type='button' value='Torna alla home' onClick={apri} className='bottone-home animazione delay-10'/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DescrizioneBlocchi