import React from "react";
import { NavLink } from "react-router-dom";
import CartWidget from './CartWidget';

function NavBar() {
    return (
      <React.Fragment >
        <div className="Nav">
        <nav className="navbar navbar-expand-lg">
        <NavLink className="navbar-brand" to ="/">Little Fox</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
        <NavLink className="nav-link" to ="/"><span className="sr-only">Little Fox</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to ="/info/QueEs">¿Qué es amigurumi?</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
        <NavLink className="nav-link" to ="/info/Info">Info antes de comprar</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <NavLink className="nav-link" to ="/Category/C1">Animales</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <NavLink className="nav-link" to ="/Category/C2">Muñecas</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <NavLink className="nav-link" to ="/Category/C3">Personajes</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <NavLink className="nav-link" to ="/Category/C4">Para bebes</NavLink>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <NavLink className="nav-link" to ="/info/Contacto">Contacto</NavLink>
        </li>
      </ul>
      <CartWidget />
      
      
    </div>
  </nav>
        </div>
      </React.Fragment>
    );
  }
  
  export default NavBar;