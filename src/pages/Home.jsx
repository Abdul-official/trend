import React from 'react'
import Hero from '../components/Home/Hero'
import Exploremenu from '../components/Home/Exploremenu'
import Adpage from '../components/Home/Adpage'
import Testimonial from '../components/Home/Testimonial'
import Download from '../components/Home/Download'
import Bestseller from '../components/Home/Bestseller'
import Story from '../components/Home/Story'

const Home = () => {
  return (
    <>
     <Hero/>
     <Exploremenu/>
     <Adpage/>
     <Download/>
     <Bestseller/>
     <Testimonial/>
     <Story/>
    </>
  )
}

export default Home
