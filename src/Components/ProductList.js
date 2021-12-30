import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setProducts } from '../actions/ProductsAction';
import Product from './Product';
import { Link } from 'react-router-dom';
const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await axios
      .get('https://fakestoreapi.com/products')
      .catch((err) => {
        console.log('ERr', err);
      });
    //  console.log(response.data)
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchProducts();
  }, []);
    console.log('Products', products);
    
  


  return (
    <div >
      <p>Here comes products </p>
      <Link to="/">home</Link>
      <div className="big-div ">
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
