import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Errore.css'
const Errore = () => {
  let apri=useNavigate()
	const pulsanteHome=()=>{
		apri('/')
	}
  return (
    <div className="container">
        <div className="messaggio">
          Oh no! Pagina non trovata!
          <br />
          Riprova con un URL esistente 😅
        </div>
        <input type='button' value='TORNA ALLA HOME' onClick={pulsanteHome}/>
    </div>
  )
}

export default Errore