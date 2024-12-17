import React from 'react'
import logo from '../assests/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping</span>
        </a>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <span className=' cursor-pointer mr-5 text-gray-700 dark:text-white  bi bi-gear-fill'></span>
            <span className='  cursor-pointer mr-5 text-gray-700 dark:text-white bi bi-search'></span>
       <a href= '/cart' className=' text-gray-700 dark:text-white mr-5'></a>
            <span className=' cursor-pointer text-gray-700 mr-5 dark:text-white bi bi-cart-fill'></span>
            <span className='cursor-pointer mr-5 text-gray-700 dark:text-white  bi bi-person-fill'> </span>
           
        </div>
    </div>
</nav>




</header>
  )
}

export default Header
