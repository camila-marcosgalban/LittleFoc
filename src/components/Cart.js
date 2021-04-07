import React, { useContext} from "react";
import { NavLink } from "react-router-dom";
import  CartContext from "../context/CartContext";
import Button from 'react-bootstrap/Button'

function Cart() {
  const cartContext = useContext(CartContext);
  const length = cartContext.cart.length;
  const { removeItem} = useContext(CartContext);
  const { clear} = useContext(CartContext);
  
  return (
    <React.Fragment>
      <h1 className="mt-5 mb-3">Carrito de compras</h1>
      <div className={length === 0 ? 'show' : 'hide' }>
      <p>El Carrito esta vacio</p>
      <NavLink className="nav-link mx-5" to ="/">
  <button>Ver productos</button>
  </NavLink>
      </div>
      <div className={`container ${length > 0 ? 'show' : 'hide' }`}>
          <table>
          <tr>
            <th>Nombre del Producto</th>
            <th>Imagen</th>
            <th>Cantidad</th>
            <th>Precio Unitario</th>
            <th>Total</th>
            <th>Eliminar</th>
          </tr>
          {cartContext.cart.map((x, index) => {
            return (
              <tr key ={x.item.id} className={x.item.id}>
            <td>{x.item.title}</td>
            <td className="imgCart"><img src={x.item.url} className="card-img-top" alt="..." /></td>
            <td>{x.quantity}</td>
            <td>${x.item.price}</td>
            <td>${(x.item.price)*(x.quantity)}</td>
            <td><Button onClick={() => removeItem(x.item.id)} variant="danger">Eliminar</Button></td>
          </tr>
          )})
          }
        </table>
        <h2>Precio Total: ${cartContext.total}</h2>
        <Button variant="info" onClick={clear} >Vaciar Carrito</Button>{' '}
      </div>
  
    </React.Fragment>
  );
}

  
  export default Cart;