import React from 'react'
import {assets} from '../../assets/assets'
import { NavLink } from 'react-router'
import { useState } from 'react'
import './Contactsec.css'
import Popup from './Popup'
import { toast } from 'react-toastify'
const Contactsec = () => {
   const [formData, setFormData] = useState({
      username: '',
      useremail: '',
   }); 
   const [showmodel , setshowmodel] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { username, useremail} = formData;

    if (!username.trim() || !useremail.trim()) {
      toast.error("fIll Contact Box",{
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
      setshowmodel(true);
  };



  return (
    <>
      <div className="about-container">
                <h1>Contact Us</h1>
                <div className="about-links">
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <span>/</span>
                  <li>
                    <NavLink to="/About">About</NavLink>
                  </li>
                  <span>/</span>
                  <li>
                    <NavLink to="/Contact">Contact</NavLink>
                  </li>
                </div>
       </div>
      <div className='contact-container'>
        <h1>Contact Us</h1>
        <p>Any Questions or Remarks? Just write us a Message</p>
        <div className='contact-input'>
            <div className='user-input'>
               <div className='name-input'>
              <label for="username">Name</label>
              <input type='text' id='username' name='username' placeholder='Enter Your Name' value={formData.name} onChange={handleChange} required></input>
               </div>
               <div className='email-input'>
              <label for="useremail">Email</label>
              <input type='text' id='useremail' name='useremail' placeholder='Enter Your Name' value={formData.useremail} onChange={handleChange} required></input>
               </div>
            </div>
            <textarea placeholder='Write Your Opinion and Grievance' ></textarea>
            <button className='contact-btn' onClick={handleSubmit}>SUBMIT NOW</button>
        </div>
            {showmodel && <Popup onclose={()=> setshowmodel(false)}/>}
   </div>

        <div className='contact-detail-container'>
               <div className='contact-box'>
                  <div className='contact-phone box box2'>
                  <div className='contact-img'>
                     <img src={assets.phone}></img>
                  </div>
                     <h3>PHONE</h3>
                     <p>+91-90879-00724</p>
                     <p>+91-90879-00734</p>
                  </div>
               </div>
               <div className='contact-box'>
                   <div className='contact-mail box box1 box2'>
                     <div className='contact-img'>
                     <img src={assets.mail}></img>
                     </div>
                     <h3>EMAIL</h3>
                     <p>lighttrendz@outlook.com</p>
                     <p>lighttrendz@gmail.com</p>
                  </div>
               </div>
               <div className='contact-box'>
                <div className='contact-mail box box1 box2'>
                <div className='contact-img'>
                     <img src={assets.globe}></img>
                </div>
                     <h3>WEBSITE</h3>
                     <p>www.lighttrendz.com</p>
                     <p>www.lighttrendzmen.in</p>
                  </div>
               </div>
               <div className='contact-box'>
                <div className='contact-mail box box1'>
                <div className='contact-img'>
                     <img src={assets.location}></img>
                </div>
                     <h3>LOCATION</h3>
                     <p>FLORIDA-33139 
                     <span>MIAMI-USA</span></p>
                  </div>
               </div>
        </div>
         <div className='map-container'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7247659.159831726!2d-89.10981790101843!3d27.503607362007383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c1766591562abf%3A0xf72e13d35bc74ed0!2sFlorida%2C%20USA!5e0!3m2!1sen!2sin!4v1754580822229!5m2!1sen!2sin"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>  
    </>
  )
}

export default Contactsec
