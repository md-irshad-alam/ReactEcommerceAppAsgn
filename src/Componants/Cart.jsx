import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './product.css'
import { DeleteFromCart } from '../Redux/action';
import { useNavigate, useRoutes } from 'react-router-dom';
const Showproduct = () => {
  const [price, setPrice] = useState(0)
    const data = useSelector(state => state.products.product);
    const dispatch = useDispatch();
  const onDeletetoCart = (id) => {
        dispatch(DeleteFromCart(id))
  }
  const route =useNavigate()
  const OnBuyNow = (title) => {
    const encodedTitle = encodeURIComponent(title);
    route(`/cart/checkout/${encodedTitle}`);
   
  }
  return (
     
    <div style={{width:'100%', marginTop:'6rem' }}>
    
      
      <div style={{ width:'80%', margin:'auto',display:'flex', alignItems:'center', columnGap:'20px'}}>
      <h1>
            Total Price of these products: 
          {data?.reduce((acc, item) => {
            const price = acc + item?.price
            localStorage.setItem('price', price)
            return price;
             },0)} $
        </h1>
        <button style={{ background:'rgb(112, 219, 229)', color: 'black',
    border: 'none',
    padding: '10px',
    fontWeight: 'bold',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '14px',
    transition: 'background 0.3s'}} onClick={()=> OnBuyNow()}>Payment</button>
         </div>
       
      

    <div className="product-container" style={{marginTop:'1rem'}}> 
      {data?.map((product) => (
        <div key={product?.id} className="product-card">
          <img src={product?.image} alt={product?.title} className="product-image" />
          <h3 className="product-title">{product?.title}</h3>
          <h3 className="product-title">Price: {product?.price}$</h3>
              <div style={{display:'flex', columnGap:'10px'}}>
             
          <button className="delete-to-cart" onClick={() => onDeletetoCart(product)}>
            Delete
            </button>
           
         </div>
        </div>
      ))}
     </div>
      
    </div>
    
  )
}

export default Showproduct
