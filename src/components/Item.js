import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";

 function Item(props) {

  const onAdd = (e, q) => {
    alert (`Agregaste ${q} elementos al carrito`)
  }

  return (
    <React.Fragment>
        <div className="card">
<img src={props.item.url} className="card-img-top" alt="..." />
<div className="card-body">
  <h5 className="card-title">{props.item.title}</h5>
  <p className="card-text">{props.item.description}</p>
  <p className="card-text">Precio: {props.item.price}</p>
  <ItemCount stock={15} initial={1} onAdd={onAdd} />
</div>
</div>
    </React.Fragment>
  );
     }

  
  export default Item;