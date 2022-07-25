import React from 'react';
import { NavLink } from 'react-router-dom';
import './styleSheeds/navBar.css'
function NavBar (){
    return(   
    <header className="header">
    <button className="boton">catalogo online</button>
    <input id="btn-menu" type="checkbox" />
    <label htmlFor="btn-menu" className="togle" id="togle">
      <span className="sp1"></span>
      <span className="sp2"></span>
      <span className="sp3"></span>
    </label>
    <menu className="menu">
      <ul className="ul"
       onClick={function ({ target }) {
  if (target.tagName === "A") document.getElementById("togle").click();
        }}
  >
        <li className="item"><NavLink to='/Products'>productos</NavLink></li>
        <li className="item"><NavLink to='/Abaut' >quienes somos</NavLink></li>
        <li className="item"><NavLink to='/Other' >otra cosa</NavLink></li>
        <li className="item"><NavLink to='/SigIn' >sig in</NavLink></li>
      </ul>
    </menu>
  

  </header>
  
  )
 
}
export default NavBar;