import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
//fontawesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
//context
import  CartContext from "../../context/CartContext";
//css
import "./CartWidget.css";

function CartWidget() {

  const cartContext = useContext(CartContext);
  
    return (
      <React.Fragment>

        <NavLink className="nav-link" to ="/Cart">
          <FontAwesomeIcon icon={ faShoppingCart } /> 
        </NavLink>

        <div className={`cartWidget ${cartContext.totalQuantity !== 0 ? 'show' : 'hide' }`}>{cartContext.totalQuantity}</div>
      
      </React.Fragment>
    );
  }
  
  export default CartWidget;