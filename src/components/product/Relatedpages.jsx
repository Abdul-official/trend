import React from 'react'
import { useEffect,useContext,useState } from 'react'
import './Relatedpages.css'
import { ShowContext } from '../../context/Showcontext'
import Productitems from '../../productitems/Productitems'
const Relatedpages = ({category,subCategory}) => {
    const {products} = useContext(ShowContext)
   const [related , setrelated]= useState([])

   



   useEffect(()=>{
     if(products.length > 0){
        let productcopy = products.slice();
        productcopy = productcopy.filter((item)=>(category === item.category))
        productcopy = productcopy.filter((item)=>(subCategory === item.subCategory))
        setrelated(productcopy.slice(0,5))
     }
   },[products])

  return (
    <>
     <div className="related-container">
        <h3>Related Products</h3>
        <div className='related-image-container'>
             {
                related.map((item , index)=>(
                   <Productitems key={index} id={item._id} name={item.name} image={item.image} price={item.price} />
                ))
             }
        </div>
      </div> 
    </>
  )
}

export default Relatedpages
