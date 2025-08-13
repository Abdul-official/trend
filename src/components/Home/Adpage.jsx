import React from 'react'
import { assets } from '../../assets/assets'
import './Adpage.css'

const Adpage = () => {
  return (
    <>
      <div className="home-ad-container">
          <h1>New Arrival Collections</h1>
        <div className="home-ad">
           <img src={assets.ad1}/>
           <img src={assets.ad2}/>
        </div> 
        </div>
    </>
  )
}

export default Adpage
