import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//firebase
import {getFirestore} from "../../firestore";
//components
import ItemList from "../ItemList/ItemList";
import Spinner from "../Spinner/Spinner";

function ItemListContainer() {

  //firestore
  const db = getFirestore();
  const getItems = db.collection("items");

  //params
  const {idCat} = useParams();

  //useState
  const [items, setItems] = useState([]);
  const [loaded, setLoeaded] = useState(false);
  
   useEffect(() => {
    setTimeout(() => {
      setLoeaded(true);
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
    }, 1500);
   });

      return (
         <React.Fragment className="ItemListContainer pt-5">

           <div className={loaded === false ? 'show' : 'hide' }>
            <Spinner/>
           </div>

           <ItemList items={items}/>
           
         </React.Fragment>
       );
      
     }
  
  export default ItemListContainer;