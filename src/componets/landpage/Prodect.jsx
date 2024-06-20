import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import "../../css/prodect.css";
import { store } from '../../App';
import { Link } from 'react-router-dom';

function Prodect() {
  axios.defaults.baseURL = "https://final-olx-backend-8-1.onrender.com"; // Update the base URL
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [Details, setDetails] = useContext(store);
  const place = Details.place;
  const item = Details.item;

  const getData = async () => {
    try {
      setLoading(true);

      let response;
      if (place) {
        const endpoint = `/item/itemsplace/${place}`;
        response = await axios.get(endpoint);
        if (item) {
          const filteredProducts = response.data.filter((pr) => pr.category === item);
          setProducts(filteredProducts);
        } else {
          setProducts(response.data);
        }
      } else if (item) {
        const endpoint = `/item/itemscategory/${item}`;
        response = await axios.get(endpoint);
        setProducts(response.data);
      } else {
        response = await axios.get('/item/all-items');
        setProducts(response.data);
      }
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [place, item]);

  return (
    <>
      {loading ? (
        <div class="container" >
        <div className="spinner"></div>
        </div>
      ) : (
        products.length === 0 ? (
          <p className='personnoitem'>No Products</p>
        ) : (
          <div className='productsection'>
          {products.map(product => (
            <div key={product.id} className='productcard'>
              <Link to='/Singleitem'>
                <img
                  src={`${axios.defaults.baseURL}/person/uploads/${product.image}`} // Update image URL
                  alt={product.name}
                  className='productimage'
                  onClick={() => localStorage.setItem('singlitemid', product._id)}
                />
              </Link>
              <div className='productdetails'>
                <div className='productname'>{product.name}</div>
                <div className='productprice'>Rs {product.price}/-</div>
              </div>
            </div>
          ))
        }</div>
        )
      )}
  

    </>
  );
}

export default Prodect;
// import React, { useEffect, useState } from 'react'
// import "../../css/prodect.css"
// import axios from 'axios'

// function Prodect() {

//     axios.defaults.baseURL="http://localhost:4444"
//   const [products,setproducts]=useState([])

//   const getdata =async ()=>{
//     const data = await axios.get("/item/all-items")
//     setproducts(data.data.Items)
//     console.log(data)
//   }  

//   useEffect(()=>{
//     getdata()
//   },[]) 
//   console.log(products) 

//   return (
//     <div className='productsection'>
//         {products.map(product => (
//           <div key={product.id} className='productcard'>
//             <img 
//             src={`http://localhost:4444/person/uploads/${product.image}`} alt={product.name} className='productimage' />
//             <div className='productdetails'>
//               <div className='productname'>{product.name}</div>
//               <div className='productname'>{product.place}</div>
//               <div className='productname'>{product.category}</div>
//               <div className='productmessage'>{product.message}</div>
//               <div className='productprice'>${product.price}</div>
//             </div>
//           </div>
//         ))}
//     </div>
//   )
// }

// export default Prodect