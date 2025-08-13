import React from 'react'
import { assets } from '../../assets/assets'
import './Download.css'
const Download = () => {
  return (
    <>
      <div className="download">
                <div className="ad">
                  <h4>GET FLAT10% OFF ON APP AND WEB</h4>
                  <p>Download The Light Tredz App and get Flat10% off on your first purchase.Use
                  <span>CODE : LIGHT4225.</span>T&C applies!</p>
                  <div className="download-img">
                    <img src={assets.playstore}></img>
                    <img src={assets.apple}></img>
                </div>
        </div>
        </div>
    </>
  )
}

export default Download
