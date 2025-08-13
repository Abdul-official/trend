import React from 'react'
import test from '../../assets/testimonial.json'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './Testimonial.css'
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonial = () => {
  return (
    <>
      <div className='swipe-container'>
        <Swiper
        spaceBetween={30}
        centeredSlides={false}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
      {
        test.map((item,index)=>{
           return(
          <SwiperSlide key={index}>   
            <div className='testimonial-content'>
              <h1>" "</h1>
              <p>{item.description}</p>
              <h2>{item.author}</h2>
            </div>
            </SwiperSlide>
           )
        })

      }
      </Swiper>
      </div>

    </>
  )
}
export default Testimonial
