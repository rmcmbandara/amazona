import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const HomeScreen = () => {
     return (
          <ul className="products">
              {
                data.products.map(product =>
                  <li>
                    <div className="product">
                      <Link to={"/product/"+product._id} href="product.thml">
                        <img className="product-image" src="/images/d1.jpg" alt="product" />
                      </Link>
                      <div className="product-name">
                        <Link to={"/product/"+product._id}>{product.name}</Link>
                      </div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">{product.rating} Stars({product.numReview})</div>
                    </div>
                  </li>
                )
              }
            </ul>
     )
}

export default HomeScreen
