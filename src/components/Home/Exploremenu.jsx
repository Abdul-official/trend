import React from 'react'
import { menu_list } from '../../assets/assets'
import './Exploremenu.css'
const Exploremenu = () => {
  return (
    <>
      <div className='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Light Trendz Products</p>
        <div className='explore-menu-list'>
            {menu_list.map((item,index)=>{
                return(
                    <div key={index} className='explore-menu-list-item'>
                        <img src={item.menu_image}></img>
                        <p>{item.menu_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
    </>
  )
}

export default Exploremenu
