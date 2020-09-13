import React from 'react'
import { Link } from 'react-router-dom'
import data from '../data'

const ProductScreen = (props) => {
     console.log(props.match.params.id)
     const product = data.products.find(x => x._id === props.match.params.id)
     return (

          <>
               <div className="back-to-result">
                    <Link to="/">Back to Results</Link>
               </div>
               <div className="details">
                    <div className="details-image">
                         <img src={product.image} alt={product.name} />
                    </div>
                    <div className="details-info">
                         <ul>
                              <li>
                                   <h4>{product.name}</h4>
                              </li>
                              <li>
                                   {product.rating} Stars({product.numReviews})
                              </li>
                              <li>
                                   <b>Price ${product.price}</b>
                              </li>
                              <li>
                                   Description:
                                    <div className="">
                                        {product.discription}
                                    </div>
                                    
                              </li>
                         </ul>
                    </div>
                    <div className="details-action">
                         <ul>
                              <li>
                                   Price: ${product.price}
                              </li>
                              <li>
                                   Satus:{product.status}
                              </li>
                              <li>
                                   Qyt:<select>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                   </select>
                              </li>
                              <li>
                                   <button className="button primary">Add to Cart</button>
                              </li>
                         </ul>
                    </div>
               </div>
          </>
     )
}

export default ProductScreen
