import React from "react";

const ProductCard = ({ product }) => {
  console.log("here");
  return (
    <div className="four columns wide">
      <div className="ui link cards">
        <div className="card">
          <div className="image">
            <img src={product.image} alt={product.title} />
          </div>
          <div className="content">
            <div className="header">{product.header}</div>
            <div className="meta price">$ {product.price}</div>
            <div className="meta">{product.category}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
