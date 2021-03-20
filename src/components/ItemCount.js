import React from "react";
import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    
  const [ counter, setCounter] = useState (initial);

  const btnAdd = () => {
    if (counter < stock){
      setCounter (counter + 1);
    }
  }

  const btnReset = () => {
    setCounter (initial);
  }

  const btnSubstract = () => {
    if (counter > 1){
      setCounter (counter - 1);
    }
  }

  
  
  return (
    <React.Fragment>
      <div className="mb-3" >
      <button onClick={btnSubstract} className="btn btnCardItems mt-2 mx-1">-</button>
      <button href="#" onClick={btnReset} className="btn btnCardItems mt-2 mx-1">Resetear</button>
      <button href="#" onClick={btnAdd} className="btn btnCardItems mt-2 mx-1">+</button>
        </div>

      <form onSubmit={ e=> onAdd(e,counter)}>
          <input className="mx-2" value={counter} />
          <button type='submit'>Add</button>
      </form>
    </React.Fragment>
    );
  };
  
  export default ItemCount;