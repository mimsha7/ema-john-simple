import React, { useEffect, useState } from "react";
import data from "../../fakeData/products.JSON";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([data]);
  const [cart, setCart] = useState([]);

  const handleAddProducts = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
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
        {products.map((pd) => (
          <Product product={pd} handleAddProducts={handleAddProducts} key={pd.key}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
