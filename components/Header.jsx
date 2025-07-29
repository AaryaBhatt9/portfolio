// import { assets } from '@/assets/assets'
// import Image from 'next/image'
// import React from 'react'

// const Header = () => {
//   return (
//     <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-80'>
//     <div className='mt-44'>
//     <Image src={assets.profile_img} alt='' className=' rounded-full w-32 ' />
//     </div>
//      <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo '>
//         Hi!! I am Aarya Bhatt 
//     <Image src={assets.hand_icon} alt='' className='w-6' /> </h3>
    
    
//     <h1 className='text-3xl sm:text-6xl lg:text- [66px] font-Ovo'>Software Developer based in California</h1>
//     <p className='max-w-2xl mx-auto font-Ovo'>I am a Software Developer from California having prior Experience in React,Next,Node,SpringBoot. 
//         I have 10 yeras of experience in companies usch as Amazon, Google.</p>

//     <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 '>
//         <a href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 '>Contact Me <Image src={assets.right_arrow_white} alt='' className='w-4' /></a>
//         <a href="/Aarya Bhatt Resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 '>My Resume <Image src={assets.download_icon} alt='' className='w-4' /> </a>
//     </div> 


//     </div>
//   )
// }

// export default Header
import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import {motion} from "motion/react"  

const Header = ({ isDarkMode }) => {
  const roles = [
    "Software Developer.",
    "AI Engineer.",
    "Data Enthusiast.", 
    
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getCircularIndex = (baseIndex, offset, length) => {
    return (baseIndex + offset + length) % length;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const [screenGap, setScreenGap] = useState(50);

  useEffect(() => {
    const updateGap = () => {
      const width = window.innerWidth;
      if (width < 480) setScreenGap(24); // very small phones
      else if (width < 640) setScreenGap(30); // phones
      else if (width < 768) setScreenGap(40); // tablets
      else if (width < 1024) setScreenGap(46); // md
      else setScreenGap(52); // large screens
    };

    updateGap();
    window.addEventListener("resize", updateGap);
    return () => window.removeEventListener("resize", updateGap);
  }, []); 
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-start gap-4 pt-20 sm:pt-24 md:pt-28'>
      {/* Enlarged profile image with spacing */} 
      <motion.div
      initial= {{scale:0}}
      whileInView={{scale:1}}
      transition={{duration:0.8, type:'spring', stiffness:100}}
      className='mt-10'>
        <Image
          src={assets.profile_img}
          alt='Profile'
          className='rounded-full w-48 h-60 object-cover' // enlarged and nicely cropped
        />
      </motion.div>

      <motion.h3 
      
      initial= {{y:-20, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.4}}
      
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi!! I am Aarya Bhatt
        <Image src={assets.hand_icon} alt='Wave' className='w-6' />
      </motion.h3>

      {/* Centered Carousel */}

    <div
        className="relative h-[200px] w-full max-w-[800px] min-w-[300px] px-2 flex items-center justify-center overflow-hidden 
  -mt-16 sm:-mt-10 md:-mt-12"
      >
        {[...Array(3)].map((_, i) => {
          const offset = i - 1;
          const index = getCircularIndex(currentIndex, offset, roles.length);
          const role = roles[index];

          const offsetY = offset * screenGap;
          let style = "opacity-0 scale-90 blur-sm z-0";
          if (offset === 0) {
            style = "opacity-100 scale-135 blur-0 z-20";
          } else {
            style = `opacity-30 scale-20 blur-sm z-10 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`;
          }
          return (
            <motion.div
              key={index}
              className={`absolute whitespace-nowrap transition-all duration-700 ease-in-out text-4xl sm:text-5xl md:text-5xl font-Ovo ${style}`}
              style={{
                transform: `translate(-50%, ${offsetY}px)`,
                left: "50%",
                top: "50%",
              }}
            >
              {role}
            </motion.div>
          );
        })}
      </div>


      {/* <motion.h1 
      
      initial= {{y:-30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.6, delay:0.5}}

      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Software Developer & AI Engineer 
      </motion.h1> */}

      <motion.p 

      initial= {{opacity:0}}
      whileInView={{opacity:1}}
      transition={{duration:0.5, delay:0.7}}
      
      
      className='max-w-2xl mx-auto font-Ovo'>
        I am a Software Developer from California having prior experience in React, Next.js, Node.js, and Spring Boot.
        I have 10 years of experience at companies such as Amazon and Google.
      </motion.p>

          {/* Buttons */}

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <motion.a

      initial= {{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.8}}

          href="#project"
          className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'
        >
          My Work 
          <Image src={assets.right_arrow_white} alt='' className='w-4' />
        </motion.a>
        
        <motion.a

      initial= {{y:30, opacity:0}}
      whileInView={{y:0, opacity:1}}
      transition={{duration:0.5, delay:0.8}}


          href="/Aarya Bhatt Resume.pdf"
          download
          className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black '
        >
          My Resume
          <Image src={assets.download_icon} alt='' className='w-4' />
        </motion.a>
      </div> 

        {/* socials */}

     <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="inline-flex rounded-md shadow-sm mt-6"
        role="group"
      >
        <a
          href="http://www.linkedin.com/in/aaryabhatt1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            src={assets.linkedin}
            alt="LinkedIn"
            className="w-4 h-4 mr-2"
          />
          LinkedIn
        </a>

        <a
          href="https://github.com/AaryaBhatt9"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            // src={isDarkMode ? assets.github : assets.github_light}
            alt="GitHub"
            className="w-4 h-4 mr-2"
          />
          GitHub
        </a>

        <a
          href="https://leetcode.com/u/AaryaBhatt/" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
        >
          <Image
            src={assets.leetcode}
            alt="LeetCode"
            className="w-4 h-4 mr-2"
          />
          LeetCode
        </a>
      </motion.div>



    </div>
  );
};

export default Header;
