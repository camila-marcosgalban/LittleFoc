import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import  CartContext from "../context/CartContext";

function CartWidget() {
  const cartContext = useContext(CartContext);
    return (
      <React.Fragment>
        <div className={cartContext.totalQuantity !== 0 ? 'show' : 'hide' }>
        <NavLink className="nav-link" to ="/Cart">
          <FontAwesomeIcon icon={ faShoppingCart } /> 
        <div className="mx-1 cartWidget">{cartContext.totalQuantity}</div>
        </NavLink>
        </div>
      </React.Fragment>
    );
  }
  
  export default CartWidget;