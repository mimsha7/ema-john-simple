import React, { useEffect, useState } from "react";
import data from "../../fakeData/products.JSON";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import { Link } from 'react-router-dom';

const Shop = () => {
  const [products, setProducts] = useState([data]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storeCart = getStoredCart();
    const productKeys = Object.keys(storeCart);

    const prevCart = productKeys.map( existKey => {
      const product = products.find( pd => pd.key === existKey) || {}
      product.quantity = storeCart[existKey];
      return product;
    })
    setCart(prevCart);
  }, [products])

  const handleAddProducts = (product) => {
    const toBeAddKey = product.key;
    const similarProduct = cart.find(pd => pd.key === toBeAddKey);
    let count = 1;
    let newCart;
    if(similarProduct) {
      count = similarProduct.quantity + 1;
      similarProduct.quantity = count;
      const others = cart.filter( pd => pd.key !== similarProduct)
      newCart = [...others, similarProduct];
    }
    else{
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    addToDb(product.key, count);
  }

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 50)));
  }, []);
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((pd, idx) => (
          <Product product={pd} showAdBtn={true} handleAddProducts={handleAddProducts} key={idx}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}> 
        <Link to="/review">
        <button>Review your order</button></Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
