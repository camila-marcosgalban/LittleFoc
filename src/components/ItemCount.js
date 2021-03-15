const ItemCount = ({ stock, initial, onAdd }) => {
    return (
      <form>
          <p className="mt-1">Stock: {stock}</p>
        <input id="cantidad" type="number" placeholder={initial}></input>
        <a href="#" onClick={(e) => onAdd(e, 1)} className="btn btnCardItems mt-2">Agregar</a>
      </form>
    );
  };
  
  export default ItemCount;