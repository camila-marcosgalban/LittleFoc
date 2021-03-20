import React from "react";
import { useEffect, useState } from "react";
import ItemList from "../components/ItemList";

function ItemListContainer() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((Resolve, Reject) => {
      setTimeout(() => {
        Resolve([
          {id: 1, title: 'Producto 1',  url: 'https://via.placeholder.com/150'},
          {id: 2, title: 'Producto 2',  url: 'https://via.placeholder.com/150'},
          {id: 3, title: 'Producto 3',  url: 'https://via.placeholder.com/150'},
          {id: 4, title: 'Producto 4',  url: 'https://via.placeholder.com/150'}
        ]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });

      return (
         <React.Fragment className="ItemListContainer container-fluid">
       <ItemList items={items}/>
         </React.Fragment>
       );
      
     }
  
  export default ItemListContainer;