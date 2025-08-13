import React, { useEffect } from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import { Outlet, useLocation } from 'react-router'
import { ToastContainer,Slide } from 'react-toastify'
import Searchbar from '../components/navbar/Searchbar'
import Success from './Success'
const Applayout = () => {
const location = useLocation();
useEffect(()=>{
 window.scrollTo(0,0)
},[location])

  return (
    <>
     <ToastContainer
     position="top-center"
autoClose={1000}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable={false}
pauseOnHover={false}
theme="light"
transition={Slide}
closeButton={false}
     />
     <Navbar/>
     <Searchbar/>
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Applayout
