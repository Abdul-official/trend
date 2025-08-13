import React, { useEffect, useState } from 'react'
import Backgorund from './Backgorund'
import './Hero.css'

const Hero = () => {
    const [herocount ,  setherocount] = useState(0)
    useEffect(()=>{
    setInterval(() => {
        setherocount((count)=> count===4 ? 0 : count+1)
     }, 5000);
    },[])
  return (
    <>
     <Backgorund herocount={herocount}/>
     <div className='hero'>
                <div className='hero-dot-play'>
                  <ul className='hero-dots'>
                    <li onClick={()=>setherocount(0)} className={herocount===0?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setherocount(1)} className={herocount===1?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setherocount(2)} className={herocount===2?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setherocount(3)} className={herocount===3?"hero-dot orange":"hero-dot"}></li>
                    <li onClick={()=>setherocount(4)} className={herocount===4?"hero-dot orange":"hero-dot"}></li>
                  </ul>
                </div>
         </div>
    </>
  )
}

export default Hero
