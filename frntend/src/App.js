import React from 'react';
import data from './data'
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';

const App = () => {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const cloaseMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="header">
          <div className="brand">
            <button onClick={openMenu}>&#9776;</button>
          
            <Link to="/">Amazona</Link>
          </div>
          <div className="header-links">
            <a href="cart.html">Cart</a>
            <a href="signin">signin</a>
          </div>
        </header>
        <aside className="sidebar">
          <h3>Shopping Catogeries</h3>
          <button className="sidebar-close-button" onClick={cloaseMenu}>X</button>
          <ul>
            <li>
              <a href="index.html">Pant</a>
            </li>
            <li>
              <a href="index.thml">Shirts</a>
            </li>
          </ul>
        </aside>
        <main className="main">
          <div className="content">
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
           
          </div>

        </main>
        <footer className="footer">
          All right reserved.
    </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
