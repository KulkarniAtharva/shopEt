import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { productListReducer } from "../reducers/ProductReducer";
import { listProducts } from "../actions/ProductActions";
import {Link} from 'react-router-dom'

function HomeScreen() {
  //const [products,setProducts] = useState([]);
  const productList = useSelector((state) => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, []);

  return loading ? (
    <div>Loading..</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div className="products">
      {products.map((product) => (
        <li key={product._id} className="li_list">
          <div className="product">
            <div className="product-img">
              <Link to={"/products/"+ product._id}><img src={product.image} alt="a" className="img"></img></Link>
            </div>
            <Link to={"/products/"+ product._id} className="product-title">{product.name}</Link>
            <div className="product-price">₹{product.price}</div>
            <div className="product-rating">{product.rating} Stars</div>
            <div className="num-reviews">{product.numreviews} Reviews</div>
          </div>
        </li>
      ))}
    </div>
  );
}

export default HomeScreen;
