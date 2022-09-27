import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = ({ product, handleAddToCart }) => {
  //   const { product, handleAddToCart } = props;
  const { img, name, price, seller, ratings } = product;
  return (
    <div className="product">
      <div className="img">
        <img src={img}></img>
      </div>
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Manufacturer: {seller}</small>
        </p>
        <p>
          <small>Rating: {ratings} star</small>
        </p>
      </div>
      <button onClick={() => handleAddToCart(product)} className="btn-cart">
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon
          className="btn-font"
          icon={faShoppingCart}
        ></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
