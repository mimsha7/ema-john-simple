import React, { useState } from "react";
import { useEffect } from "react";
import { clearTheCart, deleteFromDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import placeImg from '../../images/giphy.gif';

const Review = () => {
  const [pdata, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [placedOrder, setPlacedOrder] = useState(false)

  const handlePlacedOrder = () => {
    setCart([]);
    setPlacedOrder(true);
    clearTheCart();
  }

  const handleRemoveItem = (productKey) => {
    const newItem = cart.filter( pd => pd.key !== productKey);
    setCart(newItem);
    deleteFromDb(productKey);
  }

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON")
      .then((res) => res.json())
      .then((data) => setData(data.slice(0, 50)));
  },[]);

  useEffect(() => {
    const storeCart = getStoredCart();
    const productKeys = Object.keys(storeCart); //or can use 'Object.values'

    const cartProduct = productKeys.map((key) => {
      const product = pdata.find((pd) => pd.key === key) || {};
      product.quantity = storeCart[key];
      return product;
    });
    setCart(cartProduct);
  }, [pdata]);

  let greeting;
  if(placedOrder) {
    greeting = <img style={{marginTop:'4px'}} src={placeImg} alt="" />
  }

  return (
    <div className="shop-container">
        <div className="product-container">
    {
        cart.map((pd, idx) => <CartItem product={pd} handleRemoveItem={handleRemoveItem} key={idx} />)
    }
    { greeting }
        </div>
        <div className="cart-container">
            <Cart cart={cart} /> <button onClick={handlePlacedOrder}> Place Order</button>
        </div>

    </div>
  );
};

export default Review;