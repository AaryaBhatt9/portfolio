import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import {motion} from "motion/react"  
const Experience = () => {
  return (
    <motion.div
    
      initial={{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{duration:0.8}}
    
    
    id='experience' className='w-full px-[12%] py-10 scroll-mt-20' >
        <motion.h4
        
      initial= {{opacity:0, y: -20}}
      whileInView={{ opacity:1, y:0}}
      transition={{duration:0.5, delay: 0.5}}

        
        className='text-center mb-2 text-lg font-Ovo'>Services I Offer</motion.h4>
        <motion.h2 
        

        initial= {{opacity:0, y: -20}}
      whileInView={{ opacity:1, y:0}}
      transition={{duration:0.5, delay: 0.5}}
        
        
        className='text-center text-5xl font-Ovo '>Experience</motion.h2>
    <motion.p 
    
      initial= {{ opacity:0}}
      whileInView={{ opacity:1}}
      transition={{duration:0.8, delay:0.6}}
    
    className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'> I am a Software Developer from California, USA with 10 yrs of exp. in working with companies such as Microsoft, Tesla, Apple. </motion.p>
    
    
    <motion.div
    
    initial= {{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{duration:0.8, delay:0.7}}
    
    className='grid grid-cols-auto gap-6 my-10'>  
    {serviceData.map(({icon,title,description,link},index)=>(

      <motion.div
      
      whileHover={{scale:1.05}}
      
      key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover 
      hover:-translate-y-1  duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
        
        <Image src={icon} alt='' className='w-10' />
        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
        <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description} </p>
      <a href={link} className='flex items-center gap-2 text-sm mt-5'>
        Read More <Image alt='' src={assets.right_arrow} className='w-4' /></a>
      </motion.div>
    ))}
    </motion.div>

    
    
    
    </motion.div>
  )
}

export default Experience 






// import { assets } from '@/assets/assets';
// import Image from 'next/image';
// import React from 'react';
// import { motion } from 'framer-motion';

// const experienceData = [
//   {
//     icon: assets.briefcase, // Replace with relevant icons if needed
//     title: 'Software Developer Intern',
//     company: 'Tata Consultancy Services',
//     location: 'Gandhinagar, India',
//     duration: 'Jan 2024 – Oct 2024',
//     responsibilities: [
//       'Resolved 2 critical MySQL database issues in a Java-based Spring Boot app, improving transaction speed by 10%.',
//       'Built RESTful APIs, auto-population logic, pagination, and validations, resulting in 30% faster data entry.',
//       'Performed unit testing with JUnit and JaCoCo achieving 90%+ code coverage, reducing bugs by 35%.',
//     ],
//   },
//   {
//     icon: assets.briefcase,
//     title: 'Software Developer Intern',
//     company: 'TatvaSoft',
//     location: 'Ahmedabad, India',
//     duration: 'May 2023 – Jul 2023',
//     responsibilities: [
//       'Developed a Contact Manager system using Node.js, Express.js, MongoDB, handling 10,000+ users with 97% uptime.',
//       'Implemented JWT auth and bcrypt encryption, reducing unauthorized access by 99%.',
//     ],
//   },
//   {
//     icon: assets.briefcase,
//     title: 'Web Developer Intern',
//     company: 'WebBrains Technologies Pvt. Ltd.',
//     location: 'Vadodara, India',
//     duration: 'Feb 2022 – Jun 2022',
//     responsibilities: [
//       'Built backend modules for a booking system including dashboard, user management, and location filtering.',
//       'Used Express and MongoDB to speed up data rendering and filtering by 55%.',
//     ],
//   },
// ];

// const Services = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 0.8 }}
//       id='services'
//       className='w-full px-[12%] py-10 scroll-mt-20'
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center mb-2 text-lg font-Ovo'
//       >
//         Services I Offer
//       </motion.h4>

//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className='text-center text-5xl font-Ovo '
//       >
//         My Services
//       </motion.h2>

//       <motion.p
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.6 }}
//         className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'
//       >
//         I am a Software Developer from California, USA with 10 yrs of exp. in
//         working with companies such as Microsoft, Tesla, Apple.
//       </motion.p>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8, delay: 0.7 }}
//         className='grid grid-cols-auto gap-6 my-10'
//       >
//         {experienceData.map(({ icon, title, company, location, duration, responsibilities }, index) => (
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             key={index}
//             className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'
//           >
//             <Image src={icon} alt='' className='w-10' />
//             <h3 className='text-lg mt-4 text-gray-700 dark:text-white'>{title}</h3>
//             <p className='text-sm text-gray-600 dark:text-white/80'>
//               <strong>{company}</strong> – {location}<br />
//               <em>{duration}</em>
//             </p>
//             <ul className='mt-4 list-disc ml-5 space-y-2 text-sm text-gray-600 dark:text-white/80'>
//               {responsibilities.map((point, i) => (
//                 <li key={i}>{point}</li>
//               ))}
//             </ul>
//           </motion.div>
//         ))}
//       </motion.div>
//     </motion.div>
//   );
// };

// export default Services;
