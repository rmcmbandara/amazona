import React from 'react'

const CartScreen = (props) => {
     return (
          <div>
               {props.match.params.id}
          </div>
     )
}

export default CartScreen
