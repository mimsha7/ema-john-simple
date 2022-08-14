import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prdct) => total + prdct.price, 0)  //using reduce function

    // let total = 0; //regular
    // for (let i = 0; i< cart.length; i++) {
    //     const product = cart[i];
    //     total = total + product.price;
    // }

    let shipping = 0;
    if (total > 100){
        shipping = 0;
    }
    else if (total > 15){
        shipping = 4.99;
    }
    else if (total > 0){
        shipping = 12.99;
    }

    const tax = (total /10).toFixed(2);
    const grandTotal = (total+shipping+Number(tax)).toFixed(2);

    return (
        <div className="cart-container">
        <div className="cart-order">
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
        </div>
        <div className="cart-details">
        <p>Items: ${total} </p>
        <p>Shipping & Handling: ${shipping} </p>
        <p>Total before tax: ${total+shipping}</p>
        <p>Estimated tax: ${tax}</p>
        <h4 className="total">Order Total: ${grandTotal}</h4>
        </div>
        <button>Review your order</button>
        </div>
    )
};

export default Cart;