import React, { useContext } from 'react'
import {ShowContext} from '../context/Showcontext'
import { NavLink } from 'react-router'
import './Productitems.css'

const Productitems = ({id ,image ,name ,price }) => {
    const {currency} =useContext(ShowContext)
    return (
    <>
      <NavLink to={`/Product/${id}`}>
        <div className='product-container'>
            <div className='image-container1'>
                <img src={image[0]} alt="" />
            </div>
            <div className='product-details1'>
                <h2>{name.length > 12 ? name.slice(0,15) + "...":"" }</h2>
                <p>{currency}{price}</p>
            </div>
        </div>
        </NavLink> 
    </>
  )
}

export default Productitems
