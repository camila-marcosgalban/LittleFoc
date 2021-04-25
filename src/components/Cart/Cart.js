import React, { useContext, useState} from "react";
import { NavLink } from "react-router-dom";
//context
import  CartContext from "../../context/CartContext";
//firebase
import firebase from "firebase/app";
import "firebase/firestore";
import {getFirestore} from "../../firestore"
//bootstrap
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
//imgs
import img1 from "../../assets/empty_cart_retina.png";
import img2 from "../../assets/happy.png";
//css
import "./Cart.css";

function Cart() {

  //context
  const cartContext = useContext(CartContext);
  const cart = cartContext.cart;
  const { removeItem} = useContext(CartContext);
  const { clear} = useContext(CartContext);

  //useState
  const [db, setDb] = useState(getFirestore());
  const [orderId, setOrderId] = useState();
  const [viewText, setViewText] = useState(" ");
  const [length, setLength] = useState(cartContext.cart.length);
  const [showCheckout, setCheckout] = useState(false);

  //update
  function update(s,id) {
    const itemStock = db
      .collection("items")
      .doc(id);

    const updateStock = { stock:  s};
    itemStock.update(updateStock);
  }

  //create
  function create() {

    const newOrder = {
      user: { 
        name: document.getElementById('name').value,
        lastName: document.getElementById('lname').value,
        number: parseInt(document.getElementById('phone').value),
        email: document.getElementById('email1').value,
      message: document.getElementById('message').value},
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
    setLength(0);
    setCheckout(true);
    setViewText("hide");

    cartContext.cart.map((x) => {
      return (
         update((x.item.stock) - (x.quantity) ,x.item.id)
    )})
  }

  //form
    const [nameValidation, setNameValidation] = useState('');
    const [lnameValidation, setLNameValidation] = useState('');
    const [phoneValidation, setPhoneValidation] = useState('');
    const [email1Validation, setEmail1Validation] = useState('');
    const [email2Validation, setEmail2Validation] = useState('');
    const [validated, setValidated] = useState(false);

    //verify form
    function callValidation(){
      if((nameValidation === 'valid') && (lnameValidation === 'valid') && (phoneValidation === 'valid') && (email1Validation === 'valid') && (email2Validation === 'valid')){
        setValidated(true)
      }else{
        setValidated(false)
      }
      console.log(validated)
    }

    function validate(){
        //get values
        const inputName = document.getElementById('name').value;
        const inputLname = document.getElementById('lname').value;
        const inputPhone = document.getElementById('phone').value;
        const inputEmail1 = document.getElementById('email1').value;
        const inputEmail2 = document.getElementById('email2').value;
        //verification
        const patternEmail = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
        const patternPhone = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        const patternPhone2 = /^\+?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;

        //name
        if(inputName === '' || inputName.length < 5){
          setNameValidation('invalid')
          callValidation();
        }else if(inputName !== '' && inputName.length > 5){
          setNameValidation('valid')
          callValidation();
          console.log(inputName.length)
        }

        //last name
        if(inputLname === '' || inputLname.length < 5){
          setLNameValidation('invalid')
          callValidation();
        }else if(inputLname !== '' && inputLname.length >= 5){
          setLNameValidation('valid')
          callValidation();
        }

        //phone
        if(inputPhone.match(patternPhone) || inputPhone.match(patternPhone2)){
          setPhoneValidation('valid')
          callValidation();
        }else if(inputPhone == ""){
          setPhoneValidation('')
          callValidation();
        }else{
          setPhoneValidation('invalid')
          callValidation();
        }

        //email1
          if(inputEmail1.match(patternEmail)){
            setEmail1Validation('valid')
            callValidation();
          }else if(inputEmail1 == ""){
            setEmail1Validation('')
            callValidation();
          }else{
            setEmail1Validation('invalid')
            callValidation();
          }

          //email2
          if(inputEmail2.match(inputEmail1) && inputEmail2 !== ''){
            setEmail2Validation('valid')
            callValidation();
          }else if(inputEmail2 == ""){
            setEmail2Validation('')
            callValidation();
          }else{
            setEmail2Validation('invalid')
            callValidation();
          }
      }
  
  return (
    <React.Fragment>

      <div className="cart">

        {/* orden de compra */}
        <div className={showCheckout === true ? 'show' : 'hide' }>
          <img className="imgHappyCart" src={img2} alt="" />
          <h1 className="mt-5 mb-4">¡Gracias por su compra!</h1>
          <p className="mb-5">Su orden de compra es <b>{orderId}</b></p>
        </div>

        {/* empty cart */}
        <div className={length > 0 || showCheckout === true  ? 'hide' : 'show' + " " + viewText + 'mt-3'}>
          <img className="imgEmptyCart" src={img1} alt="" />
          <p className="mt-3">El Carrito esta vacio</p>
          <NavLink className="nav-link mx-5" to ="/">
            <Button>Ver productos</Button>
          </NavLink>
        </div>

        {/* products table */}
        <div>
          <div className={`container ${length > 0 ? 'show' : 'hide' }`}>
            <div className="row">
              <div className="tableProducts col-12 col-md-7">
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
                        <td><Button onClick={() => removeItem(x.item.id, x.item.price, x.quantity)} variant="danger">Eliminar</Button></td>
                    </tr>
                  )})
                  }
                  <tr>
                    <td colspan="6">
                    <h2 className="text-right totalCart"><b>Precio Total: ${cartContext.total}</b></h2>
                    </td>
                  </tr>
                </table>
                <Button className="my-3" variant="info" onClick={clear} >Vaciar Carrito</Button>
              </div>

              {/* form */}
              <div className="formBuy col-12 col-md-4 mt-3">
                <Form className="row">
                  <p className="ml-2"><b>Completar datos:</b></p>
                  <Form.Group id="nameBox" className={`${nameValidation} text-left col-12`}>
                      <Form.Label className="mx-1">Ingresar nombre</Form.Label>
                      <Form.Control type="text" id="name" placeholder="Camila" onChange={validate}/>
                      <span class="indicatorName"></span>
                  </Form.Group>
                  <Form.Group id="lNameBox" className={`${lnameValidation} text-left col-12`}>
                      <Form.Label className="mx-1">Ingresar apellido</Form.Label>
                      <Form.Control type="text" id="lname" placeholder="Marcos" onChange={validate}/>
                      <span class="indicatorLname"></span>
                  </Form.Group>
                  <Form.Group id="phoneBox" className={`${phoneValidation} text-left col-12`}>
                      <Form.Label className="mx-1">Ingresar teléfono</Form.Label>
                      <Form.Control type="text" id="phone" placeholder="+54-4845-3683/+54-11-4845-3683" onChange={validate}/>
                      <span class="indicatorPhone"></span>
                  </Form.Group>
                  <Form.Group id="email1Box" className={`${email1Validation} text-left col-12`}>
                      <Form.Label className="mx-1">Ingresar email</Form.Label>
                      <Form.Control type="email" id="email1" placeholder="camila.marcosgalban@davinci.edu.ar" onChange={validate}/>
                      <span class="indicatorEmail1"></span>
                  </Form.Group>
                  <Form.Group id="email2Box" className={`${email2Validation} text-left col-12`}>
                      <Form.Label className="mx-1">Volver a ingresar email</Form.Label>
                      <Form.Control type="email" id="email2" placeholder="camila.marcosgalban@davinci.edu.ar" onChange={validate}/>
                      <span class="indicatorEmail2"></span>
                  </Form.Group>
                  <Form.Group className="text-left col-12">
                      <Form.Label className="mx-1">Informacion adicional</Form.Label>
                      <Form.Control as="textarea" id="message" rows={6} placeholder="Especificar la personalizacion del pedido acá..."/>
                  </Form.Group>
                  <div className={`col-12 ${validated === true ? 'hide' : 'show'}`}>
                      <Button onClick={callValidation}>Confirmar</Button>
                  </div>
                  <div className={`col-12 ${validated === true ? 'show' : 'hide'}`}>
                      <Button onClick={create}>Comprar</Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

  
  export default Cart;