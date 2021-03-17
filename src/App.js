import React from "react";
import { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    new Promise((Resolve, Reject) => {
      setTimeout(() => {
        Resolve([
          {id: 1, title: 'Producto 1', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://via.placeholder.com/150', price: '$1500'},
          {id: 2, title: 'Producto 2', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://via.placeholder.com/150', price: '$800'},
          {id: 3, title: 'Producto 3', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://via.placeholder.com/150', price: '$1000'},
          {id: 4, title: 'Producto 4', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', url: 'https://via.placeholder.com/150', price: '$650'}
        ]);
      }, 2000);
    }).then((resultado) => setItems(resultado));
  });
  return (
    <React.Fragment>
      <div className="App">
      <NavBar/>
      <ItemListContainer items={items}/>
      </div>
    </React.Fragment>
  );
}

export default App;
