import React from "react";
import { useState } from "react";
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
<div className="card-body">
  <h5 className="card-title">{item.title}</h5>
  <ItemDetailContainer item={item}/>
  <ItemCount stock={15} initial={1} onAdd={onAdd} />
</div>
</div>
    </React.Fragment>
  );
     }

  
  export default Item;