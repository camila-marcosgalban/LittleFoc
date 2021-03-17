import React from "react";
import { useState } from "react";
import ItemCount from "../components/ItemCount";

function Item(props) {
  const [stockActual, setStockActual] = useState(15);
  const restarStock = (e, nuevoStock) => {
    e.preventDefault();
    if(stockActual !== 0){
      setStockActual((stockActual) => stockActual - nuevoStock);
    }else{
      console.log("no hay stock");
    }
    
  };

    return (
      <React.Fragment>
          <div className="card">
  <img src={props.item.url} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{props.item.title}</h5>
    <p className="card-text">{props.item.description}</p>
    <p className="card-text">Precio: {props.item.price}</p>
    <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
  </div>
</div>
      </React.Fragment>
    );
  }
  
  export default Item;