import React, { useContext, useState} from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import {getFirestore} from "../firestore"
import { NavLink } from "react-router-dom";
import  CartContext from "../context/CartContext";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Cart() {
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;
  const length = cartContext.cart.length;
  const { removeItem} = useContext(CartContext);
  const { clear} = useContext(CartContext);

  const [db, setDb] = useState(getFirestore());
  const [orderId, setOrderId] = useState();
  const [viewText, setViewText] = useState(" ");

  function update(s,id) {
    const itemStock = db
      .collection("items")
      .doc(id);

    const updateStock = { stock:  s};
    itemStock.update(updateStock);
  }
  
  function create(e) {
    e.preventDefault();
    const newOrder = {
      user: { 
        name: document.getElementById('name').value,
        number: parseInt(document.getElementById('number').value),
        email: document.getElementById('email').value},
      products: [
        { cart}
      ],
      createOn: firebase.firestore.Timestamp.fromDate(new Date()),
      total: cartContext.total,
    };

    const orders = db.collection("orders");

    orders.add(newOrder).then((resp) => {
      console.log(resp);
      console.log(resp.id);
      setOrderId(resp.id);
    });

    clear();
    setViewText("hide");

    cartContext.cart.map((x, index) => {
      return (
         update((x.item.stock) - (x.quantity) ,x.item.id)
    )})
  }
 
  return (
    <React.Fragment>
      <div className={orderId !== undefined ? 'show' : 'hide' }>
      <h1 className="mt-5 mb-3">¡Gracias por su compra!</h1>
      <p>Su orden de compra es <b>{orderId}</b></p>
      </div>
      <h1 className={`mt-5 mb-3, ${viewText }`}>Carrito de compras</h1>
      <div className={length !== 0 ? 'hide' : 'show' + " " + viewText}>
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
            <td><Button onClick={() => removeItem(x.item.id, x.quantity)} variant="danger">Eliminar</Button></td>
          </tr>
          )})
          }
        </table>
        <Button className="my-3" variant="info" onClick={clear} >Vaciar Carrito</Button>
        <h2>Precio Total: ${cartContext.total}</h2>
        

        <Form className="row mt-5">
        <Form.Group className="col-4 text-left" controlId="formBasicName">
    <Form.Label className="mx-1">Nombre</Form.Label>
    <Form.Control type="text" id="name" placeholder="Nombre" />
  </Form.Group>
  <Form.Group className="col-4 text-left" controlId="formBasicNumber">
    <Form.Label className="mx-1">Teléfono</Form.Label>
    <Form.Control type="text" id="number" placeholder="Teléfono" />
  </Form.Group>
  <Form.Group className="col-4 text-left" controlId="formBasicEmail">
    <Form.Label className="mx-1">Email</Form.Label>
    <Form.Control type="email" id="email" placeholder="Email" />
  </Form.Group>
  <div className="col-12">
  <button onClick={create}>Comprar</button>
  </div>
</Form>
      </div>
  
    </React.Fragment>
  );
}

  
  export default Cart;