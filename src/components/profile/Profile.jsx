import React, { useRef, useState } from 'react'
import './Profile.css'
import {assets} from '../../assets/assets'
const Profile = ({onclose}) => {      
  const [name ,setname] = useState("Sign Up")
    const proref = useRef() 
    const handlemodel = (e) =>{
    if(proref.current === e.target.value){
      onclose();
    }
}
  return (
    <>
      <div ref={proref} onChange={handlemodel} className="profile-container1">
         
         <div className="profile-div-container">
               <div className="profile-image-container">
              <img src={assets.about1} alt="" className="src" />
              </div>
           <div className="profile-input-container">
              <div className='cancel-btn'>
                <img src={assets.wrong} onClick={onclose} />
              </div>  
              <div className="input-container-profile">
                    <h1>{name}</h1>
                    <hr />
                    <div className="input-container-box">
                      {name === 'Login' ? '' : <input type="text" placeholder='Name'/>} 
                      <input type="email" placeholder='Email'/>
                      <input type="password" placeholder='Password'/>
                    </div>
              </div>
              <div className='forget'>
                <p>{name === "Login" ? "Forget Password" : ""}</p>
                {
                  name=== 'Login' ?
                  <p onClick={()=>setname("Sign Up")} className='log'>Signup?</p> :
                  <p onClick={()=>setname("Login")} className='log'>logIn?</p>

                }
              </div>
              <button>{name ==="Login" ? "SIGN IN" :"SIGN UP"}</button>
              <h4 className='hr1'>(or)</h4>
              <div className="icon-profile-container">
            <img src={assets.googleicon} alt="" />
            <img src={assets.facebookicon} alt="" />
            <img src={assets.twittericon} alt="" />
          </div>
          </div>
         </div>
             
      </div>
    </>
  )
}

export default Profile
