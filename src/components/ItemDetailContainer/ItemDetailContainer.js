import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//firebase
import {getFirestore} from "../../firestore"
//components
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {

  //params
  const {itemId} = useParams();

  //useState
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