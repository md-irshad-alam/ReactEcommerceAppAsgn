import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import './product.css'
import { AddToCart, DeleteFromCart } from '../Redux/action';
const Product = () => {
    const storeData = useSelector(state => state.products.product)
    console.log(storeData)
    const dispatch = useDispatch();

    
    
    const [data, setData] = useState([])
    const fetchData = async () => {
        try {
            const responce = await fetch('https://fakestoreapi.com/products');
            const data = await responce.json();
            setData(data);
        } catch (error) {
            console.log(error.message)
        }   
    }
    useEffect(() => {
        fetchData()
    }, [])
    const onAddToCart = (items) => {
        dispatch(AddToCart(items))
    }
    const onDeletetoCart = (id) => {
        dispatch(DeleteFromCart(id))
    }

  return (
    <div className="product-container">
      {data?.map((product) => (
        <div key={product?.id} className="product-card">
          <img src={product?.image} alt={product?.title} className="product-image" />
              <h3 className="product-title">{product?.title}</h3>
              <h3 className="product-title">Price: {product?.price}$</h3>
              <div style={{display:'flex', columnGap:'10px'}}>
              <button className="add-to-cart" onClick={() => onAddToCart(product)}>
            Add to Cart
              </button>
             
         </div>
        </div>
      ))}
    </div>
  )
}

export default Product
