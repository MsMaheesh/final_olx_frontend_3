import React, {  useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import '../../css/nnavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faCartShopping,faCircleQuestion,faCamera,  faSearch,  faChevronDown,  faXmark} from '@fortawesome/free-solid-svg-icons'
import { store } from '../../App'


function Nav() {
  const [Details,setDetails]=useContext(store)
  const [Place, setPlace] = useState('');
  const [Item, setItem] = useState('');
  const [open, setopen] = useState(true);


    const logout_btn = () => {
        setopen(!open);
        localStorage.removeItem('token');
        localStorage.removeItem('personid');
        setDetails({...Details,t:localStorage.getItem('token'),body:true})
    }

    const Placehandle = (e) => {
        setPlace(e.target.value);
        // localStorage.setItem('place', place);
    }

    const Categoryhandle = (e) => {
        setItem(e.target.value);
        // localStorage.setItem('item', Item);
    }

    const Placebtn = ()=>{
      setDetails({...Details,place:Place})
      // setPlace('')
      // setItem('')
    }
    const Categorybtn = ()=>{
      setDetails({...Details,item:Item})
      // setPlace('')
      // setItem('')
      
    }
    const fun=()=>{
      setDetails({...Details,place:"",item:"",body:true})
       setPlace('')
      setItem('')
    }
    const fun1=()=>{
      setopen(!open)
      setDetails({...Details,body:false})
      
    }
    const fun2=()=>{
      setopen(!open)
      setDetails({...Details,body:true})
    }
   
  console.log("deta",Details)
  return (
    <>
    <div className='navcontainer'>
        <Link to='/'><div className='navlogo' onClick={()=>fun()}>olx</div></Link>

        <div className='navlocationcontainer'>
            <div className='navlocation'>
            <FontAwesomeIcon className="navlocationlogo" onClick={Placebtn} icon={faLocationDot} />
            <input className="navlocationinput" placeholder='Kurnool' value={Place} onChange={Placehandle}></input>
            </div>
        </div>

        <div className='navsearchcontainer'>
            <div className='navsearch'>
               <FontAwesomeIcon className="navsearchlogo" onClick={Categorybtn} icon={faSearch} />
               <input className="navsearchinput" placeholder='Car/Bike/House' value={Item} onChange={Categoryhandle} ></input>
            </div> 
        </div>

            <div className='navenglish'>
               <div className="navenglishtext" >english</div>
               <FontAwesomeIcon className="navemglishlogo" icon={faChevronDown} />
            </div>

        <div className='navprofile'>
            <FontAwesomeIcon className="navprofilelogo" onClick={()=>setopen(!open)} icon={faUser} />
        </div>
        <div className='navsellbtncontainer'>
                <Link to='/sell'><button className='sellbtn'>+ sell</button></Link>
        </div>

    </div>

    <div className='navcontainer1'>
        <div className='topnav'>
        <Link to='/'><div className='navlogo1' onClick={()=>fun()}>olx</div></Link>

        <div className='navlocationcontainer1'>
            <div className='navlocation1'>
            <FontAwesomeIcon className="navlocationlogo1" onClick={Placebtn} icon={faLocationDot} />
            <input className="navlocationinput1" placeholder='Kurnool' value={Place} onChange={Placehandle} ></input>
            </div>
        </div>

        <div className='navprofile1'>
            <FontAwesomeIcon className="navprofilelogo1" onClick={()=>fun1()} icon={faUser} />
        </div>
        </div>

        <div className='navsearchcontainer1'>
            <div className='navsearch1'>
               <FontAwesomeIcon className="navsearchlogo1" onClick={Categorybtn} icon={faSearch} />
               <input className="navsearchinput1" placeholder='car/bike/house' value={Item} onChange={Categoryhandle}></input>
            </div>
        </div>  

    </div>

    <div className={`menu ${open && 'close'}`}>
        <FontAwesomeIcon className='menuxmark' icon={faXmark} onClick={()=>fun2()}></FontAwesomeIcon>
        <h1>hello,</h1>
          <div className='items'>
            <div className='item1'>welxome to olx</div>
            
            <div className='item'>
              <FontAwesomeIcon className='icon user-icon ' icon={faUser}></FontAwesomeIcon><li onClick={()=>setopen(!open)} className='personName' >{localStorage.getItem('token') ? localStorage.getItem('personName') : ''}</li>
            </div>
            <div className='item'>
            <FontAwesomeIcon className='icon' icon={faCartShopping}></FontAwesomeIcon>
             <Link to='/Personitems'> <li onClick={()=>setopen(!open)}>my prodects</li></Link>
            </div>  
            <div className='item'>  
              <FontAwesomeIcon className='icon' icon={faCircleQuestion}></FontAwesomeIcon><li onClick={()=>setopen(!open)}>help</li>
            </div>  
            <div className='item'>  
            <FontAwesomeIcon className='icon' icon={faCamera}></FontAwesomeIcon> 
              <Link to='/Sell'><li onClick={()=>setopen(!open)}>start selling</li></Link>
            </div>  
            <div className='item'>
              <Link to='/Signup_in'><li onClick={()=>setopen(!open)}>Login</li> </Link>
            </div>  
            <div className='item'>  
            <Link to='/'><li onClick={()=>logout_btn()}>Logout</li></Link>
            </div>
          </div>  
          </div>
    

    </>
    
  )
}

export default Nav