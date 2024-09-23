// 'use client';

// import React from 'react';
// import {
//   FaHtml5,
//   FaCss3Alt,
//   FaJsSquare,
//   FaReact,
//   FaNodeJs,
// } from 'react-icons/fa';
// import { SiMongodb, SiExpress, SiTypescript } from 'react-icons/si';
// import { LampContainer } from './ui/Lamp';
// import { motion } from 'framer-motion';

// const SkillsPage = () => {
//   const skills = [
//     { name: 'React', icon: <FaReact className="text-blue-400" /> },
//     { name: 'TypeScript', icon: <SiTypescript className="text-blue-700" /> },
//     { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-500" /> },
//     { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
//     { name: 'HTML', icon: <FaHtml5 className="text-red-600" /> },
//     { name: 'CSS', icon: <FaCss3Alt className="text-blue-500" /> },
//     { name: 'MongoDB', icon: <SiMongodb className="text-green-500" /> },
//     { name: 'Express', icon: <SiExpress className="text-gray-600" /> },
//   ];

//   return (
//     <div id="skills" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden  w-full pt-40">
//     <LampContainer>
//       {/* Animated heading inside the LampContainer */}
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: 'easeInOut',
//         }}
//         className="mt-8 bg-gradient-to-br from-slate-300 to-white py-4 bg-clip-text text-center  tracking-tight text-transparent md:text-7xl text-7xl font-bold mb-8 pt-20"
//       >
//         Technical Skills
//       </motion.h1>

//       {/* Skills section */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full max-w-4xl text-center mt-12">
//         {skills.map((skill, index) => (
//           <motion.div
//             key={index}
//             className="p-6 bg-white shadow-lg rounded-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
//             initial={{ opacity: 0.5, scale: 0.8 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ delay: index * 0.2, duration: 0.5 }}
//           >
//             <div className="text-5xl mb-4">{skill.icon}</div>
//             <p className="text-xl font-semibold text-gray-800">{skill.name}</p>
//           </motion.div>
//         ))}
//       </div>
//     </LampContainer>
//     </div>
//   );
// };

// export default SkillsPage;

"use client";

import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTypescript } from "react-icons/si";
// import { LampContainer } from "./ui/Lamp";
import { motion } from "framer-motion";

const SkillsPage = () => {
  const skills = [
    { name: "React", icon: <FaReact className='text-blue-400' /> },
    { name: "TypeScript", icon: <SiTypescript className='text-blue-700' /> },
    { name: "JavaScript", icon: <FaJsSquare className='text-yellow-500' /> },
    { name: "Node.js", icon: <FaNodeJs className='text-green-600' /> },
    { name: "HTML", icon: <FaHtml5 className='text-red-600' /> },
    { name: "CSS", icon: <FaCss3Alt className='text-blue-500' /> },
    { name: "MongoDB", icon: <SiMongodb className='text-green-500' /> },
    { name: "Express", icon: <SiExpress className='text-gray-600' /> },
  ];

  return (
    <div
      id='skills'
      className='relative flex min-h-screen flex-col items-center justify-center overflow-hidden w-full pt-40 px-4'
    >
      {/* <LampContainer> */}
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className=' bg-gradient-to-br from-slate-300 to-white bg-clip-text text-center tracking-tight text-transparent text-4xl sm:text-6xl md:text-7xl font-bold  py-4'
        >
          Technical <span className="text-purple">Skills</span>
        </motion.h1>

       

        {/* Skills section */}
        <div className='grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 sm:gap-6 w-full max-w-2xl sm:max-w-4xl text-center mt-12'>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className='p-4 sm:p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 ease-in-out'
              initial={{ opacity: 0.5, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className='text-4xl sm:text-5xl mb-2 sm:mb-4'>
                {skill.icon}
              </div>
              <p className='text-base sm:text-lg font-semibold text-gray-800'>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      {/* </LampContainer> */}
    </div>
  );
};

export default SkillsPage;
