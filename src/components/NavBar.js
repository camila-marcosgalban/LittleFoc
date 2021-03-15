import React from "react";
import CartWidget from './CartWidget';

function NavBar(props) {
    return (
      <React.Fragment >
        <div className="Nav">
        <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand" href="#">Little Fox</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link" href="#"><span className="sr-only">Little Fox</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">¿Qué es amigurumi?</a>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <a className="nav-link" href="#">Info antes de comprar</a>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <a className="nav-link" href="#">Animales</a>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <a className="nav-link" href="#">Muñecas</a>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <a className="nav-link" href="#">Personajes</a>
        </li>
        <li className="nav-item my-2 my-lg-0">
          <a className="nav-link" href="#">Para bebes</a>
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