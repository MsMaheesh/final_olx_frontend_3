import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import '../css/sell.css';
import Nav from './landpage/Nav';

function Sell() {
  axios.defaults.baseURL = "https://final-olx-backend-8-1.onrender.com";
  const token = localStorage.getItem('token');
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');
  const [category, setCategory] = useState('');
  const [place, setPlace] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
 

  console.log(name, price, message, place, category, image);
  console.log("token", token);
  
  if (!token) {
    return <Navigate to='/Signup_in' />;
  }
 

  const sellButton = async (e) => {
    setLoading(true);
    e.preventDefault();
    if(!name || !price || !message || !category || !place ||!image){
      alert("All fields are required");
      setLoading(false);
      return;
    }
    const formData = new FormData();
    
    formData.append('name', name);
    formData.append('price', price);
    formData.append('message', message);
    formData.append('category', category);
    formData.append('place', place);
    formData.append('image', image);

    try {
      const response = await axios.post('/add', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
     
      alert(response.data);
      setLoading(false);
      if (response.data) {
        setName('');
        setPrice('');
        setMessage('');
        setCategory('');
        setPlace('');
        setImage(null);
      }
    } catch (error) {
      console.error(error.response ? error.response.data : error.message);
    }
  };
  
  if (loading) {
    return (
      <div className="sellloading-container">
        <div className="sellspinner"></div>
      </div>
    );
  }


  return (
    <>
      <Nav />
      <div className='sell-container'>
        <form className='sell-items' onSubmit={sellButton}>
          <div className='sell-header'>
            <div className='sell-header-text'>Sell Product</div>
          </div>
          <div className='sell-item'>
            <span>Product Name</span>
            <input 
              type='text' 
              name='name' 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          <div className='sell-item'>
            <span>About Product</span>
            <input 
              type='text' 
              name='message' 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          <div className='sell-item'>
            <span>Category</span>
            <input 
              type='text' 
              name='category' 
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
            />
          </div>
          <div className='sell-item'>
            <span>Place</span>
            <input 
              type='text' 
              name='place' 
              value={place} 
              onChange={(e) => setPlace(e.target.value)} 
            />
          </div>
          <div className='sell-item'>
            <span>Product Price</span>
            <input 
              type='text' 
              name='price' 
              value={price} 
              onChange={(e) => setPrice(e.target.value)} 
            />
          </div>
          <div className='sell-item'>
            <span>Product Image</span>
            <input 
              type='file' 
              name='image' 
              onChange={(e) => setImage(e.target.files[0])} 
            />
          </div>
          <div className='sell-btn'>
            <button type='submit'>Submit</button>
          </div>
        </form>  
      </div>
    </>
  );
}

export default Sell;