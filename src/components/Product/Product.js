import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
  const { name, seller, img, wholePrice, priceFraction, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4 className="item-name">{name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <p>
          <small>
            ${wholePrice}.{priceFraction}
          </small>
        </p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
        <br />
        <button className="add-btn" onClick={() => props.handleAddProducts(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
      </div>
    </div>
  );
};

export default Product;
