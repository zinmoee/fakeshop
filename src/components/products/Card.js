import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { id, title, price, category, image } = product;

  return (
    <Link to={`/products/${id}`}>
      <div className="ui card">
        <div className="image">
          <img src={image} atl={title} />
        </div>
        <div className="left aligned content">
          <div className="header">{title}</div>
          <div className="meta">$ {price}</div>
          <div className="description">{category}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
