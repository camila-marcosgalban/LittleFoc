import React from "react";
import Item from "../components/Item";

function ItemList({items}) {
  
  return (
    <React.Fragment>
  <ul>
    {items.map((x, index) => (
      <Item key={index} item={x} />
    ))}
  </ul>
    </React.Fragment>
  );
}

  
  export default ItemList;