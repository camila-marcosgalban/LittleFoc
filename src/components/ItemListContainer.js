import React from "react";
import { useState } from "react";
import ItemCount from "../components/ItemCount";

function ItemListContainer(props) {

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
      <React.Fragment className="ItemListContainer container-fluid">
          <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nombre producto</h5>
    <p className="card-text">{props.greeting}</p>
    <ItemCount stock={stockActual} initial={1} onAdd={restarStock} />
  </div>
</div>
      </React.Fragment>
    );
    
  }
  
  export default ItemListContainer;