import React,{useContext} from 'react';
import '../../css/category.css';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBicycle, faBook, faCar, faMobile, faMotorcycle, faMusic, faTv } from '@fortawesome/free-solid-svg-icons';
import { store } from '../../App'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Category() {
  const [Details,setDetails]=useContext(store) 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  };

  return (
    <div className='categorysection'>
      <div className='categorytitle'>
        All Categories
      </div>
      <Slider {...settings} className='categoryicons'>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faMobile} onClick={()=>setDetails({...Details,item:'Phone'})} />
          <div className='categorylogoname'>Mobile</div>
        </div>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faBicycle} onClick={()=>setDetails({...Details,item:'Bicycle'})}/>
          <div className='categorylogoname'>Bicycle</div>
        </div>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faCar} onClick={()=>setDetails({...Details,item:'Car'})} />
          <div className='categorylogoname'>Car</div>
        </div>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faMotorcycle} onClick={()=>setDetails({...Details,item:'Bike'})} />
          <div className='categorylogoname'>Motorcycle</div>
        </div>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faBook} onClick={()=>setDetails({...Details,item:'Book'})} />
          <div className='categorylogoname'>book</div>
        </div>
        <div className='categoryicon'>
          <FontAwesomeIcon className='categorylogo' icon={faTv} onClick={()=>setDetails({...Details,item:'Tv'})}/>
          <div className='categorylogoname'>tv</div>
        </div>
        {/* Add more categories as needed */}
      </Slider>
    </div>
  );
}

export default Category;
// import React from 'react'
// import '../../css/category.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBicycle, faCar, faMobile, faMotorcycle } from '@fortawesome/free-solid-svg-icons'

// function Category() {
//   return (
//     <div className='categorysection'>
        
//         <div className='categorytitle'>
//             all category
//         </div>
//         <div className='categoryicons'>
//             <div className='categoryicon'>
//                <FontAwesomeIcon className='categorylogo'icon={faMobile} />
//                <div className='categorylogoname'>mobile</div>
//             </div>
//             <div className='categoryicon'>
//                <FontAwesomeIcon className='categorylogo'icon={faBicycle} />
//                <div className='categorylogoname'>bicycle</div>
//             </div>
//             <div className='categoryicon'>
//                <FontAwesomeIcon className='categorylogo'icon={faCar} />
//                <div className='categorylogoname'>car</div>
//             </div>
//             <div className='categoryicon'>
//                <FontAwesomeIcon className='categorylogo'icon={faMotorcycle} />
//                <div className='categorylogoname'>mobile</div>
//             </div>
//         </div>

//     </div>
//   )
// }

// export default Category