import React, { useEffect, useState } from "react";
import {getFirestore} from "../firestore"
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";

function ItemListContainer() {

  const {idCat} = useParams();
  const [items, setItems] = useState([]);

  function GetAll() {
    const db = getFirestore();
     const getItems = db.collection("items");

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
    
     function GetCategories() {
      const db = getFirestore();
      const byCategory = db.collection("items").where("categoryId", "==", idCat);
       byCategory.get().then((resp) => {
         if (resp.size === 0){
           console.log("sin datos");
         }
         let res2 = resp.docs.map(c => {
           return {id: c.id,...c.data()}
         });
         setItems(res2);
        })
     }

  
   useEffect(() => {
     if(idCat !== undefined){
      GetCategories();
     }else{
       GetAll();
     }
   }, []);

      return (
         <React.Fragment className="ItemListContainer container-fluid">
        <ItemList items={items}/>
         </React.Fragment>
       );
      
     }
  
  export default ItemListContainer;