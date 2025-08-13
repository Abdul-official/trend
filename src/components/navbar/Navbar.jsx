import React, { useContext, useState } from 'react'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router'
import {ShowContext} from '../../context/Showcontext'
import './Navbar.css'
import Profile from '../profile/Profile'


const Navbar = () => {
  const [showprofile , setshowprofile] = useState(false); 
  const [shownavbar , setshownavbar] = useState(false);
  const {setshowsearch,getcartcount} = useContext(ShowContext);
  return (
    <>
    <div className="nav-div">
      <p>Call : 044-45614700 / 044-45700800</p>
      <p>Signup & Get 25%-Off <span>SignUp?</span></p>
    </div>
     <div className='navbar-container'>
           <div className='logo'>
               <NavLink to={'/'}><img src={assets.logo} /></NavLink>
           </div>
           <ul>
            <li><NavLink to={'/'}>Home</NavLink></li>
            <li><NavLink to={'/Collection'}>Collection</NavLink></li>
            <li><NavLink to={'/About'}>About</NavLink></li>
            <li><NavLink to={'/Contact'}>Contact</NavLink></li>
           </ul>
           <div className='icon-container'>
              <div><img src={assets.search_icon} onClick={()=>setshowsearch(true)}/></div>
              <div className='profile-icon'><img src={assets.profile_icon}/>
                  <ul>
                    <li onClick={()=>setshowprofile(true)}>Profile</li>
                    <li>Orders</li>
                    <li>LogOut</li>
                  </ul>
              </div>
              <div className='cart-icon'><NavLink to={'/Cart'}><img src={assets.cart_icon}/><span>{getcartcount()}</span></NavLink></div>
              <div className='menu-icon'><img src={assets.menu_icon} onClick={()=>setshownavbar(true)} /></div>
           </div>
                   {showprofile && <Profile onclose={()=>setshowprofile(false)}/> } 
           <div className={`mobile-nav ${shownavbar ? "active-menu" : " "}`}>
                 <div className='back' onClick={()=>setshownavbar(false)}>
                  <img src={assets.white} alt="" />
                  <p>Back</p>
                 </div>
                 <div className='mobile-ul'>
                  <li onClick={()=>setshownavbar(false)}><NavLink to={'/'}>Home</NavLink></li>
                  <li onClick={()=>setshownavbar(false)}><NavLink to={'/Collection'}>Collection</NavLink></li>
                  <li onClick={()=>setshownavbar(false)}><NavLink to={'/About'}>About</NavLink></li>
                  <li onClick={()=>setshownavbar(false)}><NavLink to={'/Contact'}>Contact</NavLink></li>
                 </div>
           </div>
    </div> 
    </>
  )
}

export default Navbar
