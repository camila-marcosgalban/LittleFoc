import React from "react";

 function ItemDetail({item}) {

  return (
    <React.Fragment>
        <div class="itemDetail">
        <p className="card-text">{item.description}</p>
  <p className="card-text">Precio: {item.price}</p>
        </div>
    </React.Fragment>
  );
     }

  
  export default ItemDetail;