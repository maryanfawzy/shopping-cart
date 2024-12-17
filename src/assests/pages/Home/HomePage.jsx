import React from 'react'
import { Hero } from './component/Hero'
import FeaturedProduct from './component/FeaturedProduct'
import { Testimonials } from './component/Testimonials'
import { Faq } from './component/Faq'


const HomePage = () => {
  return (
    <div>
      <Hero/>
      <FeaturedProduct/>
      <Testimonials/>
      <Faq/>
      
    </div>
  )
}

export default HomePage
