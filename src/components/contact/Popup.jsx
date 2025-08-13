import React from 'react'
import { useRef } from 'react';
import './Popup.css'

const Popup = ({onclose}) => {
 const modelref = useRef();
  const handlemodel = (e) =>{
    if(modelref.current === e.target){
      onclose();
    }
}
  return (
    <>
      <div ref={modelref} onClick={handlemodel} className='model'>
         <div className='model-content'>
           <h1>Thank You</h1>
           <p>WE ARE RECEIVE YOUR MESSAGE</p>
           <button onClick={onclose}>Ok</button>
        </div>
    </div> 
    </>
  )
}

export default Popup
