import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
    return (
      <React.Fragment className="navbar-text"><a className="nav-link" href="#">Carrito <FontAwesomeIcon icon={ faShoppingCart } />
      </a>
      </React.Fragment>
    );
  }
  
  export default CartWidget;