import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import QueEs from './info/QueEs';
import Info from './info/Info';
import Contacto from './info/Contacto';
import Cart from './components/Cart';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Router>
        <NavBar/>
        <div>
        <Switch>
        <Route path="/info/QueEs"><QueEs/></Route>
        <Route path="/info/Info"><Info/></Route>
        <Route path="/info/Contacto"><Contacto/></Route>
        <Route path="/Cart"><Cart/></Route>
        <Route path="/item/:itemId"><ItemDetailContainer/></Route> 
        <Route path="/Category/:idCat"><ItemListContainer/></Route>
        <Route path="/Category/:idCat"><ItemListContainer/></Route>
        <Route path="/Category/:idCat"><ItemListContainer/></Route>
        <Route path="/Category/:idCat"><ItemListContainer/></Route>
        <Route exact path="/"><ItemListContainer/></Route>
        </Switch>
        </div>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
