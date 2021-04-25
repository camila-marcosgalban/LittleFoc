import React from "react";
import { NavLink } from "react-router-dom";
//bootstrap
import { Navbar, Nav} from 'react-bootstrap';
//components
import CartWidget from '../CartWidget/CartWidget';
//css
import "./NavBar.css";

function NavBar() {

  
    return (
      <React.Fragment >
        <Navbar collapseOnSelect expand="lg" className="Nav">

          <NavLink className="navbar-brand logo" to ="/">Little Fox</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="mr-auto">
                <NavLink className="nav-link" to ="/"><span className="sr-only">Little Fox</span></NavLink>
                <NavLink className="nav-link" to ="/info/QueEs">¿Qué es amigurumi?</NavLink>
                <NavLink className="nav-link" to ="/info/Info">Info antes de comprar</NavLink>
                <NavLink className="nav-link" to ="/Category/C1">Animales</NavLink>
                <NavLink className="nav-link" to ="/Category/C2">Muñecas</NavLink>
                <NavLink className="nav-link" to ="/Category/C3">Personajes</NavLink>
                <NavLink className="nav-link" to ="/Category/C4">Para bebes</NavLink>
                <NavLink className="nav-link" to ="/info/Contacto">Contacto</NavLink>
            </Nav>

            <Nav><CartWidget /></Nav>
          </Navbar.Collapse>
        </Navbar>
        
      </React.Fragment>
    );
  }
  
  export default NavBar;