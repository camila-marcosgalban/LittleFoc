import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {Products} from "../components/Products";

function ItemDetailContainer() {
  const {itemId} = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    new Promise((Resolve, Reject) => {
      setTimeout(() => {
        Resolve(Products);
      }, 2000);
    }).then((resultado) => {
      const i = resultado.filter(x => x.id === (itemId));
      setDetail(i)
  });
});

      return (
         <React.Fragment className="container-fluid">
        <div>
        {detail.map((x, index) => (
      <ItemDetail key={index} detail={x} />
    ))}
        </div>
         </React.Fragment>
       );
      
     }
  
  export default ItemDetailContainer;