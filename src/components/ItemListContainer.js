import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";
import {Products} from "../components/Products";

function ItemListContainer() {

  const {idCat} = useParams();

  const [items, setItems] = useState([]);
  
  useEffect(() => {
    new Promise((Resolve, Reject) => {
      setTimeout(() => {
        if(idCat){
          Resolve(Products.filter(x => x.category === idCat));
        }else{
          Resolve(Products);
        }
      }, 2000);
    }).then((result) => setItems(result));
  });

      return (
         <React.Fragment className="ItemListContainer container-fluid">
       <ItemList items={items}/>
         </React.Fragment>
       );
      
     }
  
  export default ItemListContainer;