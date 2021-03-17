import React from "react";
import Item from "../components/Item";

function ItemList(props) {
    return (
      <React.Fragment>
    <ul>
      {props.items.map((x, index) => (
        <Item key={index} item={x} />
      ))}
    </ul>
      </React.Fragment>
    );
  }
  
  export default ItemList;