import React, { useEffect, useState } from 'react';
import "../css/singleitem.css";
import Nav from './landpage/Nav';
import axios from 'axios';

function Singleitem() {
  const baseURL = "https://final-olx-backend-8-1.onrender.com"; // Update with your backend base URL
  const id = localStorage.getItem('singlitemid');
  const [singleItem, setSingleitem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // State for handling errors

  const getdata = async () => {
    try {
      const res = await axios.get(`${baseURL}/item/single-item/${id}`); // Include baseURL
      setSingleitem(res.data);
    } catch (error) {
      console.error("Error fetching item:", error);
      setError(error.message || "Error fetching item"); // Set error state with error message
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  if (loading) {
    return (
      <div className="singleloading-container">
        <div className="singlespinner"></div>
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className='singleitemsection'>
        {error ? ( // Display error message if error occurred
          <p className='error'>{error}</p>
        ) : (
          <div className='item-container'>
            <div className='image-section'>
              <img
                src={`${baseURL}/person/uploads/${singleItem.image}`} // Include baseURL
                alt={singleItem.name}
                className='item-image'
              />
            </div>
            <div className='details-section'>
              <h5 className='item-name'>{singleItem.name}</h5>
              <p className='item-price'>${singleItem.price}</p>
              <p className='item-description'>{singleItem.message}</p>
              <div className='seller-details'>
                <h3>Seller Information</h3>
                <p>Name: *******</p>
                <p>Contact: ********</p>
                <button className='call-button'>Call</button>
                <button className='chat-button'>Chat</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Singleitem;
// import React, { useEffect, useState } from 'react'
// import "../css/singleitem.css"
// import Nav from './landpage/Nav'
// import axios from 'axios';

// function Singleitem() {
//   axios.defaults.baseURL="https://final-olx-backend.onrender.com"
//     const id = localStorage.getItem('singlitemid')
//     console.log("id",id)
//     const [singleItem,setSingleitem]=useState(null)

//    const getdata = async ()=>{
//        const res = await axios.get(`/item/single-item/${id}`)
//        console.log(res.data)
//        setSingleitem(res.data)
//    }
//    console.log("dd",singleItem)
//    useEffect(()=>{
//       getdata()
//    },[])
//    if (!singleItem) return <div>Loading...</div>;

//    return (
//        <div>
//            <Nav />
//            <div className='singleitemsection'>
//                <div className='item-container'>
//                    <div className='image-section'>
//                        <img
//                            src={`http://localhost:4444/person/uploads/${singleItem.image}`}
//                            alt={singleItem.name}
//                            className='item-image'
//                        />
//                    </div>
//                    <div className='details-section'>
//                        <h5 className='item-name'>{singleItem.name}</h5>
//                        <p className='item-price'>${singleItem.price}</p>
//                        <p className='item-description'>{singleItem.message}</p>
//                        <div className='seller-details'>
//                            <h3>Seller Information</h3>
//                            <p>Name: *******</p>
//                            <p>Contact: ********</p>
//                            <button className='call-button'>Call</button>
//                            <button className='chat-button'>Chat</button>
//                        </div>
//                    </div>
//                </div>
//            </div>
//        </div>
//    );
// }

// export default Singleitem;