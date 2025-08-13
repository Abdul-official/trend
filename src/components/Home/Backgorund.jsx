import React from 'react'
import './Background.css'
import {assets} from '../../assets/assets'

const Backgorund = ({herocount}) => {
  if(herocount === 0){
    return <img src={assets.hero_img} className='background-image'/>
  }
  else if(herocount === 1){
    return <img src={assets.hero_img_1} className='background-image'/>
  }
  else if(herocount === 2){
    return <img src={assets.hero_img_2} className='background-image'/>
  }
  else if(herocount === 3){
    return <img src={assets.hero_img_3} className='background-image'/>
  }
  else if(herocount === 4){
    return <img src={assets.hero_img_4} className='background-image'/>
  }
}

export default Backgorund
