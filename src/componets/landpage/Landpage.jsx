import React, { useContext } from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Main from './Main'
import { store } from '../../App'


function Landpage() {
  const [Details,setDetails]=useContext(store)
  const body = Details.body
  return (
    <div>
      <Nav/>
      <Main/>
      {body && <Footer/>}
      
   
    </div>
  )
}

export default Landpage