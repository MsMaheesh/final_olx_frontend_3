import React from 'react'
import '../../css/main.css'
import Prodect from './Prodect'
import Category from './Category'
import { store } from '../../App'
import { useContext } from 'react'

function Main() {
  const [Details,setDetails]=useContext(store)
  const body = Details.body
  return (
    <div className='main'>
      {body && <Category />}
      {body && <Prodect />}
    </div>
  )
}

export default Main