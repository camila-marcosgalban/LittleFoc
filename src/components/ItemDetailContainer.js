import React from "react";
import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import Collapse from 'react-bootstrap/Collapse'
import Button from 'react-bootstrap/Button'

function ItemDetailContainer() {
  const [items, setItems] = useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    new Promise((Resolve, Reject) => {
      setTimeout(() => {
        Resolve([
            {id: 1,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$1500'},
            // {id: 2,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$800'},
            // {id: 3,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$1000'},
            // {id: 4,description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', price: '$650'}
        ]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });
      return (
         <React.Fragment className="container-fluid">
           <button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >Ver Detalle</button>
      <Collapse in={open}>
        <div id={items.id}>
        {items.map((x, index) => (
      <ItemDetail key={index} items={x} />
    ))}
        </div>
      </Collapse>
         </React.Fragment>
       );
      
     }
  
  export default ItemDetailContainer;