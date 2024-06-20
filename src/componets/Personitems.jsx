import React, { useEffect, useState } from 'react';
import Nav from './landpage/Nav';
import '../css/personitem.css';
import axios from 'axios';

function Personitems() {
  const baseURL = "https://final-olx-backend-8-1.onrender.com"; // Update with your backend base URL
  const personid = localStorage.getItem('personid');
  const [personItem, setPersonitem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for handling errors

  const getdata = async () => {
    if (!personid) {
      setLoading(false);
      return;
    }
    try {
      setLoading(true);
      const data = await axios.get(`${baseURL}/person/items/${personid}`); // Include baseURL
      console.log(data,"ggg")
      setPersonitem(data.data);
    } catch (error) {
      console.error("Error fetching items:", error);
      setError(error.message || "Error fetching items"); // Set error state with error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  const deleteItem = async (itemid) => {
    try {
      setLoading(true);
      const res = await axios.delete(`${baseURL}/item/${itemid}`); // Include baseURL
      setLoading(false);
      if (res.data === 'ok') {
        setPersonitem(personItem.filter(item => item._id !== itemid));
        alert("Product deleted Successfully");
      }
    } catch (error) {
      console.error("Error deleting item:", error);
      setError(error.message || "Error deleting item"); // Set error state with error message
    }
  };

  if (loading) {
    return (
      <div className="personloading-container">
        <div className="personspinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className='personitemsection'>
        {error ? ( // Display error message if error occurred
          <p className='error'>{error}</p>
        ) : (
          !personid || personItem.length === 0 ? (
            <p className='noitem'>No Products</p>
          ) : (
            <table className='personitem-table'>
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {personItem.map((item) => (
                  <tr key={item._id}>
                    <td data-label="Product Name">{item.name}</td>
                    <td data-label="Image">
                      <img src={`${baseURL}/person/uploads/${item.image}`} alt={item.name} /> {/* Include baseURL */}
                    </td>
                    <td data-label="Price">{item.price}</td>
                    <td data-label="Delete">
                      <button className='personitemdelet-btn' onClick={() => deleteItem(item._id)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )
        )}
      </div>
    </div>
  );
}

export default Personitems;
// import React, { useEffect, useState } from 'react'
// import Nav from './landpage/Nav'
// import '../css/personitem.css'
// import axios from 'axios'

// function Personitems() {

//   const personid = localStorage.getItem('personid')
//   console.log(personid)
//   axios.defaults.baseURL="https://final-olx-backend.onrender.com"

//   const [personItem,setPersonitem]=useState([])

//   const getdata =async ()=>{
//     const data = await axios.get(`/person/items/${personid}`)
//     setPersonitem(data.data)
//     console.log(data)
//   } 

//   useEffect(()=>{
//     getdata()
//   },[]) 
//   console.log("pro",personItem) 

//   const deleteItem=async(itemid)=>{
//     console.log("id",itemid)
//     const res = await axios.delete(`/item/${itemid}`)
//     console.log("uu",res.data)
//     if(res.data === 'ok'){
//       setPersonitem(personItem.filter(item=>item._id !== itemid))
//       alert("prodect deleted Successfully")
//     }
    

//   }

//   return (
//     <div>
//         <Nav/>
//         <div className='personitemsection'>
//           {personItem.length === 0 ? (
//             <p className='noitem'>No Prodects</p>
//           ):(
//             <table className='personitem-table'>
//               <thead>
//               <tr>
//                 <th>Prodect Name</th>
//                 <th>image</th>
//                 <th>price</th>
//                 <th>delete</th>
//               </tr>
//               </thead>
//               <tbody>
//                 {personItem.map((item)=>{
//                   return(
//                     <>
//                     <tr key={item._id}>
//                       <td>{item.name}</td>
//                       <td><img src={`http://localhost:4444/person/uploads/${item.image}`} 
//                       alt={item.name} /></td>
//                       <td>{item.price}</td>
//                       <td>
//                          <button className='personitemdelet-btn' onClick={()=>deleteItem(item._id)}>Delete</button>
//                       </td>
//                     </tr>
//                     </>
//                   )
//                 })}

//               </tbody>
              
//             </table>
//           )}
           
//         </div>

//     </div>
//   )
// }

// export default Personitems