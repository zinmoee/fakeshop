import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { selectedProduct } from "../../redux/actions/productActions";

const ProductDetail = () => {
  const product = useSelector((state) => state.productReducer.product);
  const { id, title, price, category, description, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  return (
    <div className="ui container">
      {Object.keys(product).length === 0 ? (
        <div>loading...</div>
      ) : (
        <div className="ui segment">
          <div className="ui two column very relaxed grid">
            <div className="column">
              <img className="ui image" src={image} />
            </div>
            <div className="column left aligned">
              <h1>{title}</h1>
              <h2>
                <a className="ui teal tag label">$ {price}</a>
              </h2>
              <h3 className="ui brown block header">{category}</h3>
              <p>{description}</p>
              <div className="ui vertical animated button" tabIndex="0">
                <div className="hidden content">
                  <i className="shop icon"></i>
                </div>
                <div className="visible content">Add to Cart</div>
              </div>
            </div>
          </div>
          <div className="ui vertical divider">and</div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
