import React from "react";

 function ItemDetail({items}) {

  return (
    <React.Fragment>
        <div class="itemDetail">
        <p className="card-text">{items.description}</p>
  <p className="card-text">Precio: {items.price}</p>
        </div>
    </React.Fragment>
  );
     }

  
  export default ItemDetail;