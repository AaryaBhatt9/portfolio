import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import Link from 'next/link';
const Navbar = ({isDarkMode, setIsDarkMode}) => {

const [isScroll, setIsScroll] = useState(false);
const [isHovered, setIsHovered] = useState(false);

const sideMenuRef = useRef();

const openMenu = () =>
{
    sideMenuRef.current.style.transform = 'translateX(-16rem)';
}


const closeMenu = ()=>
{
    sideMenuRef.current.style.transform= 'translateX(16rem)';
}

useEffect(() => {
  
    window.addEventListener('scroll', ()=>{
        if (scrollY > 50) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
     }, []);
  

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%] dark:hidden'>
        <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>
    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4  flex items-center justify-between z-50 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : " "}`}> 
        <a href="#top">
            <Image src={ isDarkMode? assets.logo_dark :assets.logo} alt="" className='w-18 h-18 sm:w-18 sm:h-18 md:w-18 md:h-18 lg:w-20 lg:h-20 xl:w-16 xl:h-16 cursor-pointer mr-16  object-contain rounded' />
        </a>
        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3
       ${isScroll ? "":"bg-white shadow-sm bg-opacity-50  dark: border dark: border-white/50 dark:bg-transparent"} `}>
            <li><a className='font-Ovo' href="#top">Home</a></li>
            <li><a className='font-Ovo' href="#about">About me</a></li>
            <li><a className='font-Ovo' href="#experience">Experience</a></li>
            <li><a className='font-Ovo' href="#project">Projects</a></li>
            <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
        </ul> 
        <div className='flex items-center gap-4'>

        <button onClick={()=> setIsDarkMode(prev => !prev)}className="p-2 rounded-full transition-all duration-300 hover:scale-110 hover:bg-gray-200 dark:hover:bg-white/10"
>
            <Image src={ isDarkMode? assets.sun_icon : assets.moon_icon} alt='' className='w-6'  />
        </button>

            {/* <a href="#contact" className=' hidden lg:flex items-center gap-3 px-10 py-2.5  border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>
                 Contact <Image src={ isDarkMode? assets.arrow_icon_dark : assets.arrow_icon} alt="arrow" className='w-3' /> </a>
         */}
        
            <Link 
            href="/#contact"
            scroll={true}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`hidden lg:inline-flex items-center justify-center relative overflow-hidden p-0.5 rounded-full ml-4 group font-Ovo ${
              isDarkMode
                ? "bg-gradient-to-br from-purple-600 to-blue-500"
                : "bg-gradient-to-br from-black to-gray-500"
            }`}
          >
            <span className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-gray-900 transition-all bg-white dark:bg-gray-900 rounded-full group-hover:bg-transparent group-hover:dark:bg-transparent group-hover:text-white dark:text-white border border-gray-300 dark:border-transparent">
              Contact
              <Image
                src={
                  isDarkMode
                    ? assets.arrow_icon_dark
                    : isHovered
                    ? assets.arrow_icon_dark
                    : assets.arrow_icon
                }
                alt="arrow"
                className="w-3"
              />
            </span>
          </Link>


        <button className=' block md:hidden ml-3' onClick={openMenu}>
            <Image src={ isDarkMode ? assets.menu_white  : assets.menu_black} alt='' className='w-6' />
        </button>
        </div>

    {/* Mobile Menu */}

    <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition-duration-500 dark:bg-darkHover dark:text-white'>
    
    <div className='absolute right-6 top-6' onClick={closeMenu}>
        <Image src={ isDarkMode? assets.close_white : assets.close_black} alt=''  className='w-5 cursor-pointer'/>
    </div>
    
    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About me</a></li>
    <li><a className='font-Ovo' onClick={closeMenu} href="#experience">Experience</a></li>
    <li><a className='font-Ovo' onClick={closeMenu} href="#project">Projects</a></li>
    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
    </ul>
{/* className='hover:text-blue-400 hover:scale-125 transition-transform duration-300' */}
    </nav>
    </>
  )
}

export default Navbar