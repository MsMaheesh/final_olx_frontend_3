import React, { useState , createContext} from 'react'
import './css/app.css'
import Sell from './componets/Sell'
import {  Routes,Route} from 'react-router-dom'
import Signup_in from './componets/Signup_in'
import Landpage from './componets/landpage/Landpage'
import Personitems from './componets/Personitems'
import Singleitem from './componets/Singleitem'

export const store= createContext();

function App() {
  const [Details,setDetails]=useState({
    place:'',
    item:'',
    t:'',
    body:true
  })
  return (
    <div>
      <store.Provider value={[Details, setDetails]}>
      <Routes>
        <Route path='/Signup_in' element={<Signup_in/>}/>
        <Route path='/' element={<Landpage/>}/>
        <Route path='/Sell' element={<Sell/>}/>
        <Route path='/personitems' element={<Personitems/>}/>
        <Route path='/Singleitem' element={<Singleitem/>}/>
      </Routes>
      </store.Provider>

    </div>
  )
}

export default App
