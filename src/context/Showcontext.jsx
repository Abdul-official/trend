import React, { createContext, useState } from "react";
import {products} from '../assets/assets'
import { toast } from "react-toastify";

export const ShowContext = createContext(null);
const ShowContextProvider = (props) => {
    

const currency = "$"
const df = '20'

  const [search , setsearch] = useState('');
    const [showsearch , setshowsearch] = useState(false);
    
    const [cartItems ,setcartItems] = useState({});
    
    const addTocart = async(itemId , size) =>{
        let cartData = structuredClone(cartItems)
        if(!size){
            toast.error("Select Product Size",{
        style:{
           width:'200px',
           fontSize: '0.9rem',
           borderRadius:'5px',
           padding:'0px 20px',
           margin:'0',
           minHeight:'40px',
           color:'#111',
           background:'#ececec',
           boxShadow:'var(--box-shadow)'
        }
      })
            return;
        }
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }else{
                cartData[itemId][size] = 1;
            }
        }else{
            cartData[itemId] ={}
            cartData[itemId][size] = 1;
        }
        setcartItems(cartData);
        toast.success("Product Added",{
        style:{
           width:'200px',
           fontSize: '0.9rem',
           borderRadius:'5px',
           padding:'0px 20px',
           margin:'0',
           minHeight:'40px',
           color:'#111',
           background:'#ececec',
           boxShadow:'var(--box-shadow)'
        }
      })
    }
   
    //for cart count

    const getcartcount = () =>{
        let totalcount = 0
        for (const items in cartItems)
         for (const item in cartItems[items])
        try {
            if(cartItems[items][item] > 0){
                totalcount += cartItems[items][item]
            }
        } catch (error) {
            console.log(error)
        }
        return totalcount;
    }
           
//updatequantity


const updatequantity = async(itemid , size ,quantity) => {
    const totalquantity = structuredClone(cartItems);
    totalquantity[itemid][size] = quantity;
    setcartItems(totalquantity)
}

//totalsubacount

const gettotalamount = () =>{
    let totalamount = 0;
    for (const items in cartItems){
        let iteminfo = products.find((product)=>product._id===items)
        for(const item in cartItems[items]){
            try {
                if(cartItems[items][item]>0){
                       totalamount += iteminfo.price * cartItems[items][item]
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
    return totalamount;
}

const value ={
products,
currency,
df,
search,
setsearch,
showsearch,
setshowsearch,
addTocart,
cartItems,
getcartcount,
gettotalamount,
updatequantity,

}

return <ShowContext.Provider value={value} >
           {props.children}
    </ShowContext.Provider>
}


export default ShowContextProvider;



