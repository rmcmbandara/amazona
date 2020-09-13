import React from 'react';

import './App.css';

const App = () => {

  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }
  
  const cloaseMenu = () => {
    document.querySelector(".sidebar").classList.remove("open")
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Amazona</a>
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
        <ul className="products">
          <li>
            <div className="product">
              <a href="product.thml">
                <img className="product-image" src="/images/d1.jpg" alt="product" />
              </a>
              <div className="product-name">
                <a href="product.html">Slim Shirt</a>
              </div>
              <div className="product-brand">Nike</div>
              <div className="product-price">$60</div>
              <div className="product-rating">4.5 Stars (10 Reviews)</div>
            </div>
          </li>


        </ul>

      </main>
      <footer className="footer">
        All right reserved.
    </footer>
    </div>

  );
}

export default App;
