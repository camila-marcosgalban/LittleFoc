import React from "react";
import ItemList from "../components/ItemList";

function ItemListContainer(props) {

    return (
      <React.Fragment className="ItemListContainer container-fluid">
    <ItemList items={props.items}/>
      </React.Fragment>
    );
    
  }
  
  export default ItemListContainer;