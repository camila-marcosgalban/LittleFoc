import React from "react";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';



function App() {
  return (
    <React.Fragment>
      <div className="App">
      <NavBar/>
      <ItemListContainer/>
      </div>
    </React.Fragment>
  );
}

export default App;
