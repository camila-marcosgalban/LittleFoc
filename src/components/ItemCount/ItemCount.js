import React, { useState } from "react";
//bootstrap
import Button from 'react-bootstrap/Button'

const ItemCount = ({ stock, initial, onAdd, update }) => {
    
  const [ counter, setCounter] = useState (initial);

  const btnAdd = () => {
    if (counter < stock && stock > 0){
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
      
      <div className="mb-3">
        <button onClick={btnSubstract} className="btn btnCardItems mt-2 mx-1">-</button>
        <button onClick={btnReset} className="btn btnCardItems mt-2 mx-1">Resetear</button>
        <button onClick={btnAdd} className="btn btnCardItems mt-2 mx-1">+</button>
      </div>

      <form onSubmit={ e=> onAdd(e,counter)}>
          <input className="mx-2" value={counter} />
          <Button type='submit' className="mt-2">Agregar</Button>
      </form>

    </React.Fragment>
    );
  };
  
  export default ItemCount;