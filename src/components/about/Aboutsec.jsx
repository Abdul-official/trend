import React from 'react'
import {assets} from '../../assets/assets'
import './Aboutsec.css'
import { NavLink } from 'react-router'

const Aboutsec = () => {
  return (
    <>
     <div className="about-container">
        <h1>About Us</h1>
        <div className="about-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <span>/</span>
          <li>
            <NavLink to="/About">About</NavLink>
          </li>
        </div>
      </div>
      <div className="about-details">
        <div className="about1">
          <div className="about1-img">
            <img src={assets.about1}></img>
          </div>
          <div className="about1-content">
            <h1>Our Company</h1>
            <p>
              Welcome to Shopplate where brilliance meets innovation. We take
              pride in being your ultimate destination for exquisite lighting
              solutions that illuminate spaces and lives alike. With a passion
              for creating luminous experiences, we curate a diverse range of
              cutting-edge light fixtures designed to elevate any environment.
              Our commitment to quality craftsmanship and a keen eye for
              aesthetic appeal ensures that each product we offer is not just a
              source of light
            </p>
            <p>
              but a work of art in its own right. Whether you're seeking ambient
              elegance for your home or functional brilliance for a commercial
              space, [Your Company Name] is dedicated to bringing your vision to
              light. Explore our collection and let your surroundings shine with
              a touch of our radiant expertise. Elevate your space, embrace the
              light, only with Shopplate
            </p>
          </div>
        </div>
        <div className="about2">
          <div className="about2-content">
            <h1>Who We Are?</h1>
            <p>
              At Shopplate we illuminate your world with a curated collection of
              exceptional lighting solutions. Established with a passion for
              transforming spaces and creating ambiance, we stand as a beacon of
              quality and style in the realm of lighting. With a keen eye for
              design and a commitment to sourcing the finest materials, we pride
              ourselves on offering a diverse range of work that not only
              brighten spaces but also elevate aesthetics.
            </p>
            <p>
              Committed to delivering excellence, we prioritize customer
              satisfaction and provide expert guidance to help you find the
              perfect lighting solution for any setting. Welcome to Shopplate
              where light meets inspiration. Lorem, ipsum dolor sit Lorem, ipsum. amet consectetur adipisicing elit. Nemo, corrupti! Illuminate your world today!
            </p>
          </div>
          <div className="about2-img">
            <img src={assets.about2}></img>
          </div>
        </div>
      </div>
      <div className="about-shop">
            <h2>Reason To Shop With Us</h2>
           <div className="about-shop-box">
                <div className="shop-box">
                    <img src={assets.supporticon}/>
                    <h1>24/7 Friendly Support</h1>
                    <p>Our support team always ready for you to 7 days a week</p>
                </div>
                <div className="shop-box">
                    <img src={assets.boxicon}/>
                    <h1>7 Days Easy Return</h1>
                    <p>Product any fault within 7 days for an immediately exchange.</p>
                </div>
                <div className="shop-box">
                     <img src={assets.tickicon}/>
                     <h1>Quality Guaranteed</h1>
                     <p>If your product are not perfect, return them for a full refund</p>
                </div>
           </div>
      </div>
      <div className="about-partner">
            <h1>Our Partner</h1>
           <div className="scroll-container"> 
            <div className="about-partner-box">
              <img src={assets.amazon}/>
              <img src={assets.flipkart}/>
              <img src={assets.pete}/>
              <img src={assets.myntra}/>
              <img src={assets.meesho}/>
              <img src={assets.amazon}/>
              <img src={assets.flipkart}/>
              <img src={assets.peter}/>
              <img src={assets.myntra}/>
              <img src={assets.meesho}/>
            </div>
            </div>
      </div> 
    </>
  )
}

export default Aboutsec
