import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { NavLink } from "react-router-dom";
import  CartContext from "../context/CartContext";

 function ItemDetail({detail}) {
  const maxStock = 15;
  const minStock = 1;
  const [ stock, setStock] = useState (maxStock);
  const [ viewBtn, setViewBtn] = useState ("hide");
  const [ viewCount, setViewCount] = useState ("show");
  const initial = 0;
  const [ itemQuantity, setItemQuantity] = useState (initial);
  const { addItem} = useContext(CartContext);
  const item = {
    id: detail.id,
    title: detail.title,
    category: detail.category,
    description: detail.description,
    url: detail.url,
    price: detail.price
  }

  const onAdd = (e, q) => {
    e.preventDefault();
    if(stock < minStock){
      alert('no hay stock');
    }else if(q <= stock){
      setStock(stock - q);
      setItemQuantity(itemQuantity + q);
      console.log(itemQuantity + q);
      console.log(stock - q);
      addItem (item, itemQuantity + q);
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