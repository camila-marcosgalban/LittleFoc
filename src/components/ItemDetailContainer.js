import React, { useEffect, useState } from "react";
import {getFirestore} from "../firestore"
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const {itemId} = useParams();
  const [detail, setDetail] = useState([]);

  function GetItem(id) {
    const db = getFirestore();
    db.collection("items").doc(id).get().then((c) => {
      setDetail({id: c.id,...c.data()});
    });
  };
  
    useEffect(() => {
      GetItem(itemId);
    }, []);

      return (
         <React.Fragment className="container-fluid">
        <div>
      <ItemDetail detail={detail} />
        </div>
         </React.Fragment>
       );
      
     }
  
  export default ItemDetailContainer;