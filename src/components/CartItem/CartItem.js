import React from 'react';
import './CartItem.css'

const CartItem = (props) => {
    // console.log(props)
    const {name, price, quantity, key} = props.product;
    return (
        <div className="cart-item">
            <h4 className="item-name">name: {name}</h4>
            <p><small>Price: {price}</small></p>
            <p>Quantity: {quantity}</p>
            <br />
            <button onClick={() => props.handleRemoveItem(key)}
            className='btn-rmv'>Remove</button>
        </div>
    );
};

export default CartItem;