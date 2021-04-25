import React from "react";
//components
import Item from "../Item/Item";
//css
import "./ItemList.css";

function ItemList({items}) {
  
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="pt-5 pb-3">
            <ul>
              {items.map((x, index) => (
                <Item key={index} item={x} />
              ))}  
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

  
  export default ItemList;