import React from 'react'
import { useContext,useEffect,useState } from 'react';
import {ShowContext} from '../../context/Showcontext'
import { loadStripe } from "@stripe/stripe-js";
import './Cartsec.css'
const stripePromise = loadStripe("pk_test_51RvHRKHzVmYq6Pv1UlJdYsToglXC4M4HOJ5EHfkyF2xPltYiV3Plb97KEqliMkDhQ0hf3YTe6DwhJuuAeSVcYNkd000Ue7r8Iw");
const Cartsec = () => {
 const {products, currency ,cartItems,updatequantity,gettotalamount, df} = useContext(ShowContext)

      const [Cartdata , setCartdata] = useState([]);
      useEffect(()=>{
           const tempdata = [];
           for(const items in cartItems){
            for(const item in cartItems[items]){
                if(cartItems[items][item]){
                    tempdata.push({
                        _id : items,
                        size : item,
                        quantity : cartItems[items][item]
                    })
                }
            }
            setCartdata(tempdata)
           }

      },[cartItems])
      
        const subtotal = gettotalamount()
        const deliveryFee = subtotal === 0 ? 0 : df
        const total = subtotal === 0 ? 0 : subtotal + Number(df)
        
        const handleCheckout = async () => {
    const stripe = await stripePromise;

    const res = await fetch("http://localhost:5173/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ amount: total * 100 })
    });

    const session = await res.json();

    await stripe.redirectToCheckout({ sessionId: session.id });
  };


  return (
    <>
    <div className="total-cart">
      <div className='cart-container'>
        <h1>Your cart....!</h1>
           <div className='cart-detail'>
            {
                Cartdata.map((item)=>{
                    const cartCopy = products.find((product)=>product._id === item._id)
                    return(
                        <>
                        <div className="product-section">  
                        <img src={cartCopy.image[0]} alt="" />
                        <div>
                        <p>{cartCopy.name.length > 12 ? cartCopy.name.slice(0 , 8) + "..." :"" }</p>
                        <div className='size-price'>
                        <p>{item.size}</p>
                         <p>{currency}{cartCopy.price}</p>
                        </div>
                         <p onClick={()=>updatequantity(item._id,item.size,0)} className='remove'>Remove</p>
                        </div>
                        </div>
                        <div className="quantity-section"> 
                          <input type="number" min={1}  defaultValue={item.quantity} onChange={(e)=>e.target.value === '' || e.target.value === "0" ? null : updatequantity(item._id , item.size , Number(e.target.value) ) }/>
                        </div>
                        <div className="price-section">
                            <p>{currency}{cartCopy.price * item.quantity}</p>
                        </div>
                      </>
                        
                    )
                  })
                }
           </div>
      </div>
         <hr className='hr' />
      <div className="carttotalheading">
        <h1>Cart total..!</h1>
        <div className="carttotal-container">
           <div className='carttotal'>
                <div className="box">
                     <p>Subtotal</p>
                     <p>{currency}{subtotal}.00</p>
                </div>
                <div className="box">
                     <p>Delivery Charge</p>
                     <p>{currency}{deliveryFee}.00</p>
                </div>
                <div className="box">
                      <b>Total</b>
                      <b>{currency}{total}.00</b>
                </div>
           <button onClick={handleCheckout}>CheckOut</button>
           </div>
          </div>
      </div>
      </div>



    </>
  )
}

export default Cartsec
