import React, { useContext, useEffect, useState } from 'react'
import './Bestseller.css'
import { ShowContext } from '../../context/Showcontext'
import Productitems from '../../productitems/Productitems'
const Bestseller = () => {
    const {products} = useContext(ShowContext)
    const [bestseller ,setbestseller] = useState([])

    useEffect(()=>{
      const bestProduct = products.filter((item)=>(item.bestseller))
      setbestseller(bestProduct.slice(0,10))
   },[])
  return (
    <>
    <div className="bestseller-container">
    <h1>Best Selling Product</h1> 
    <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat, expedita?</span>
    <div className="bestseller">
        {
            bestseller.map((item,index)=>(
             <Productitems key={index} id={item._id} image={item.image} price={item.price} name={item.name} />
            ))
        }
    </div>
    </div>
    </>
  )
}

export default Bestseller
