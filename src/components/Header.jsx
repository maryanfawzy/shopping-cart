import React, { useEffect, useState } from 'react'
import logo from '../assests/logo.png'
import { json, Link } from 'react-router-dom'
import { Search } from './Search'

const Header = () => {
    const [darkMode, setDarkMode]= useState(JSON.parse(localStorage.getItem("darkMode"))|| false)
    const [searchSection, setSearchSection] = useState(false)
    useEffect(()=>{
        localStorage.setItem("darkMode", JSON.stringify(darkMode))
        if (darkMode ){
            document.documentElement.classList.add("dark")

        }else{
            document.documentElement.classList.remove("dark")

        }

    },[darkMode])
  return (
    <header>
      

<nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Shopping</span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          

            <span onClick={()=> setDarkMode(!darkMode)} class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"></span>
                    <span onClick={()=>setSearchSection(!searchSection) } class="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"></span>
                    <a href="/cart" class="text-gray-700 dark:text-white mr-5">
                    <span class="text-2xl bi bi-cart-fill relative">
                        <span class="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">0</span>
                    </span>                    
                    </a>
                    <span class="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"></span>
           
        </div>
    </div>
</nav>
 { searchSection && <Search setSearchSection ={setSearchSection}/>} 





</header>
  )
}

export default Header
