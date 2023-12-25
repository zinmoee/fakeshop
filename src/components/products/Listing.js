import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";
import ProductCard from "./Card";

const ProductListing = () => {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderList = products.map((product) => {
    return <ProductCard product={product} key={product.id} />;
  });

  return <div className="ui link cards container">{renderList}</div>;
};

export default ProductListing;
