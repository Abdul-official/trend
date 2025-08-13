import React from 'react'
import { useState,useEffect,useContext} from 'react';
import {assets} from '../../assets/assets'
import { useParams } from 'react-router';
import {ShowContext} from '../../context/Showcontext'
import Relatedpages from './Relatedpages';
import './Productpage.css'
const Productpage = () => {
    const {currency , products , addTocart} = useContext(ShowContext)
    const {ProductId} = useParams();
    const [productData , setproductdata] = useState(false)
    const [image , setimage] = useState('')
    const [size , setsize] = useState('')   
    const fetchproductData = async () =>{
        products.map((item)=>{
            if(item._id === ProductId){
               setproductdata(item)
               setimage(item.image[0])
               return null;
            }
        })
    }

  useEffect(()=>{
      fetchproductData()
  },[ProductId, products])   
  
  return productData ? (
    <>
      <div className='Productdata-container'>
             <div className='image-section'>
                   <div className="small">
                      {
                        productData.image.map((item , index)=>(
                            <img onClick={()=>setimage(item)} key={index} src={item} alt="" />
                        ))
                      }
                   </div>
                   <div className="big">
                      <img src={image} />
                   </div>
             </div>
             <div className='detail-section'>
                    <h1>{productData.name}</h1>
                    <div className='star'>
                         <img src={assets.star_icon} alt="" />
                         <img src={assets.star_icon} alt="" />
                         <img src={assets.star_icon} alt="" />
                         <img src={assets.star_icon} alt="" />
                         <img src={assets.dullstar_icon} alt="" />
                         <p>(122)</p>
                    </div>
                    <p className='price'>{currency}{productData.price}</p>
                    <h2 className='description'>{productData.description}</h2>
                    <div className='size'>
                        <h1>Select Size</h1>
                        {
                            productData.sizes.map((item,index)=>(
                                <button key={index} onClick={()=>setsize(item)} className={item === size ? "active-size" : ""}>{item}</button>
                            ))
                        }
                    </div>
                    <div className='addtocart'>
                        <button onClick={()=>addTocart(productData._id,size)}>ADD TO CART</button>
                    </div>
                    <hr />
                    <div className='product-detail'>
                         <h1>Product Benefits</h1>
                         <p>100% Original Product</p>
                         <p>Cash on delivery is availble on this product </p>
                        <p>Easy Return and exchange policy within 7 days</p>
                    </div>
             </div>
      </div>
      <Relatedpages category={productData.category} subCategory={productData.subCategory} />
    </>
  ) : <div style={{opacity : "0"}}></div>
}


export default Productpage
