import React, { useEffect, useState } from "react";
import {getFirestore} from "../firestore"
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const db = getFirestore();
  const {idCat} = useParams();
  const [items, setItems] = useState([]);
  const getItems = db.collection("items");
  
   useEffect(() => {
    setTimeout(() => {
      if(idCat !== undefined){
        getItems.where("categoryId", "==", idCat).get().then((resp) => {
          if (resp.size === 0){
            console.log("sin datos");
          }
          let res2 = resp.docs.map(c => {
            return {id: c.id,...c.data()}
          });
          setItems(res2);
         })

       }else{
        getItems.get().then((resp) => {
          if (resp.size === 0){
            console.log("sin datos");
          }
          let res = resp.docs.map(c => {
            return {id: c.id,...c.data()}
          });
          setItems(res);
         })
         
       }
    }, 500);
   });

      return (
         <React.Fragment className="ItemListContainer container-fluid">
        <ItemList items={items}/>
         </React.Fragment>
       );
      
     }
  
  export default ItemListContainer;