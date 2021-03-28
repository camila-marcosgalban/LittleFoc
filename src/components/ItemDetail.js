import React from "react";
import ItemCount from "./ItemCount";
import { useState } from "react";
import { NavLink } from "react-router-dom";

 function ItemDetail({detail}) {
  const maxStock = 15;
  const minStock = 1;
  const [ stock, setStock] = useState (maxStock);
  const [ viewBtn, setViewBtn] = useState ("hide");
  const [ viewCount, setViewCount] = useState ("show");

  const onAdd = (e, q) => {
    e.preventDefault();
    if(stock < minStock){
      alert('no hay stock');
    }else if(q <= stock){
      setStock(stock - q);
      console.log(stock - q)
      alert (`Agregaste ${q} elementos al carrito`)
      setViewBtn("show");
      if((stock - q) <= 0){
        setViewCount("hide");
      }
      }
  }

  return (
    <React.Fragment>
        <div className="card" id={detail.id}>
<img src={detail.url} className="card-img-top" alt="..." />
<div className= {detail.category + " card-body"}>
  <h5 className="card-title">{detail.title}</h5>
  <div class="itemDetail mt-3">
        <p className="card-text">{detail.description}</p>
  <p className="card-text">Precio: {detail.price}</p>
        </div>
        <p>Stock: {stock}</p>
  <div className={viewCount}><ItemCount stock={stock} initial={1} onAdd={onAdd} /></div>
  <NavLink className="nav-link mx-5" to ="/Cart">
  <button className={`${viewBtn} mt-2`}>Terminar mi compra</button>
  </NavLink>
</div> 
</div>
    </React.Fragment>
  );
     }

  
  export default ItemDetail;