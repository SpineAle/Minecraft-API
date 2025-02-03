import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Navbar.css";

const Navbar = () => {
	let apri=useNavigate()
	const pulsanteHome=()=>{
		apri('/')
	}
	const pulsanteInfo=()=>{
		apri('/informazioni')
	}
	const pulsanteTable=()=>{
		apri('/descrizioneblocchitabella')
	}
  return (
    <div className="navbar">
      <div className="navbar-logo">
        <div className="logo">
          <img src="https://pngimg.com/uploads/minecraft/minecraft_PNG53.png" alt="Minecraft Logo" />
        </div>
        <div className="testo">Minecraft block database</div>
      </div>
      <div className='icone'>
		<div className='icona'>
			<i className="casa bi bi-house" style={{paddingRight:"10px", paddingLeft:"3px"}} onClick={pulsanteHome}></i>
			<br/>
			<div className='scritto'><strong>HOME</strong></div>
		</div>
		<div className='icona'>
			<i className="tabella bi bi-table" style={{paddingRight:"10px", paddingLeft:"3px"}} onClick={pulsanteTable}></i>
			<br/>
			<div className='scritto'><strong>DESCRIZIONI</strong></div>
		</div>
		<div className='icona'>
			<i className="info bi bi-info-circle" onClick={pulsanteInfo}></i>
			<br/>
			<div className='scritto'><strong>INFO</strong></div>
		</div>
		</div>
    </div>
  );
};

export default Navbar;