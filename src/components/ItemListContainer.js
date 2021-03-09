function ItemListContainer(props) {
    return (
      <div className="ItemListContainer container-fluid">
          <div className="card">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Nombre producto</h5>
    <p className="card-text">{props.greeting}</p>
    <a href="#" className="btn btnCardItems">Agregar</a>
  </div>
</div>
      </div>
    );
  }
  
  export default ItemListContainer;