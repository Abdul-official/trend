import React, { useContext, useEffect, useState } from 'react'
import {ShowContext} from '../../context/Showcontext'
import './Searchbar.css'
import { assets } from '../../assets/assets'
import { useLocation } from 'react-router'
const Searchbar = () => {
  const {search,setsearch , showsearch ,setshowsearch} = useContext(ShowContext)

  const location =useLocation();
  const [visible,setvisible] = useState(false)

  useEffect(()=>{
    if(location.pathname.includes('Collection')){
        setvisible(true)
    }else{
        setvisible(false)
    } 
  },[location])
   return showsearch && visible ? (
    <>
     <div className='searchbar-container'>
        <div className="search-input">
            <input type="text" placeholder='Search Product' value={search} onChange={(e)=>setsearch(e.target.value)}/>
            <img src={assets.search} />
        </div>
        <button onClick={()=>setshowsearch(false)} className='search-btn'>Cancel</button>
    </div>
    </>   
  ): null


}

export default Searchbar
