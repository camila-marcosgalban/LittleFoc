import React from "react";
import ItemCount from "./ItemCount";

 function ItemDetail({detail}) {
  const onAdd = (e, q) => {
    alert (`Agregaste ${q} elementos al carrito`)
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
  <ItemCount stock={15} initial={1} onAdd={onAdd} />
</div> 
</div>
    </React.Fragment>
  );
     }

  
  export default ItemDetail;