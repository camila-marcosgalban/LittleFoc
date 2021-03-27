 import React from "react";
 import {
  NavLink,
  Redirect
} from "react-router-dom";
import Button from 'react-bootstrap/Button'
import ItemDetailContainer from "./ItemDetailContainer";
import ItemCount from "./ItemCount";

 function Item({item}) {
  const onAdd = (e, q) => {
    alert (`Agregaste ${q} elementos al carrito`)
  }

  return (
    <React.Fragment>
        <div className="card" id={item.id}>
<img src={item.url} className="card-img-top" alt="..." />
<div className= {item.category + " card-body"}>
  <h5 className="card-title">{item.title}</h5>
  <NavLink className="nav-link" to ={`Item/${item.id}`}>
  <Button>Ver Detalle</Button>
  </NavLink>
  <ItemCount stock={15} initial={1} onAdd={onAdd} />
</div> 
</div>
    </React.Fragment>
  );
     }

  
  export default Item;