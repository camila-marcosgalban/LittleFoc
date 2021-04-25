import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import QueEs from './info/QueEs';
import Info from './info/Info';
import Contacto from './info/Contacto';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartProvider';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <CartProvider>
        <Router>
        <NavBar/>
        <div>
        <Switch>
          <Route path="/info/QueEs"><QueEs/></Route>
          <Route path="/info/Info"><Info/></Route>
          <Route path="/info/Contacto"><Contacto/></Route>
          <Route path="/Cart"><Cart/></Route>
          <Route path="/item/:itemId"><ItemDetailContainer/></Route> 
          <Route path="/Category/item/:itemId"><ItemDetailContainer/></Route> 
          <Route path="/Category/:idCat"><ItemListContainer/></Route>
          <Route path="/Category/:idCat"><ItemListContainer/></Route>
          <Route path="/Category/:idCat"><ItemListContainer/></Route>
          <Route path="/Category/:idCat"><ItemListContainer/></Route>
          <Route exact path="/"><ItemListContainer/></Route>
        </Switch>
        </div>
        <Footer/>
        </Router>
        </CartProvider>
      </div>
    </React.Fragment>
  );
}

export default App;
