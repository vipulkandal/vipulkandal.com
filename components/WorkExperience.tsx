"use client";

import { Timeline } from "@/components/ui/Timeline";
import { WobbleCard } from "./ui/WobbleCard";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { motion } from "framer-motion";

const WorkExperience = () => {
  const infosysTechStack = [
    {
      id: 1,
      name: "React",
      designation: "Frontend Framework",
      icon: <FaReact size={40} color='#61dafb' />,
    },
    {
      id: 2,
      name: "Node.js",
      designation: "Backend Framework",
      icon: <FaNodeJs size={40} color='#3c873a' />,
    },
    {
      id: 3,
      name: "MongoDB",
      designation: "Database",
      icon: <FaDatabase size={40} color='#4db33d' />,
    },
  ];
  const experienceTimeline = [
    {
      title: "Aug 2023 - Present",
      content: (
        <WobbleCard containerClassName='col-span-1 lg:col-span-2 h-full bg-black-800 min-h-[500px] lg:min-h-[300px]'>
          <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-4'>
            <strong>Technology Analyst</strong> at Infosys | Chandigarh
          </p>
          <p className='text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-medium mb-4'>
            <strong>Bank Of America (BoFA)</strong>
          </p>
          <div className='flex flex-row  items-center  mb-6 w-full'>
            <AnimatedTooltip items={infosysTechStack} />
          </div>
          <ul className='list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm'>
            <li>
              Developed scalable, secure, and high-performance web applications
              to meet the financial services needs of BOFA.
            </li>
            <li>
              Collaborated with backend teams to integrate complex data storage
              solutions and ensure seamless application functionality.
            </li>
            <li>
              Implemented responsive, practical, user-friendly interfaces using
              React, enhancing the client’s digital banking experience.
            </li>
            <li>
              Optimized application performance and automated workflows,
              reducing response times and improving overall efficiency across
              the platform.
            </li>
          </ul>
        </WobbleCard>
      ),
    },
    {
      title: "May 2022 - Feb 2023",
      content: (
        <WobbleCard containerClassName='col-span-1 lg:col-span-2 h-full bg-black-800 min-h-[500px] lg:min-h-[300px]'>
          <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-4'>
            <strong>Frontend Developer</strong> at ValueCoders | Remote
          </p>

          <ul className='list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm'>
            <li>
              Fixed banking web application for comparing different investments.
            </li>
            <li>
              Responsible for managing a team of 5 to successfully complete a
              banking web application overhaul, reducing page load times, and
              improving user satisfaction based on client feedback.
            </li>
            <li>
              Improved investment comparison feature, leading to better user
              engagement and a smoother financial product comparison process.
            </li>
            <li>
              Application was built on Next.js for the frontend and using
              Node.js/Express with MongoDB for the backend.
            </li>
            <li>
              Created reusable components for the Figma design provided by the
              UX team.
            </li>
          </ul>
        </WobbleCard>
      ),
    },
    {
      title: "May 2020 - Oct 2021",
      content: (
        <WobbleCard containerClassName='col-span-1 lg:col-span-2 h-full bg-black-800 min-h-[500px] lg:min-h-[300px]'>
          <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-4'>
            <strong>Frontend Developer</strong> at Gratific Pvt Ltd | Remote
          </p>
          <ul className='list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm'>
            <li>
              Gratific is a product company related to hospitality, F&B areas.
            </li>
            <li>
              Built reusable components for various products by writing code in
              manageable chunks.
            </li>
            <li>Developed frontend using JSX and CSS3.</li>
            <li>
              Collaborated with different teams working on various tools to
              ensure seamless integrations.
            </li>
          </ul>
        </WobbleCard>
      ),
    },
    {
      title: "Sep 2018 - Apr 2020",
      content: (
        <WobbleCard containerClassName='col-span-1 lg:col-span-2 h-full bg-black-800 min-h-[500px] lg:min-h-[300px]'>
          <p className='text-neutral-800 dark:text-neutral-200 text-sm md:text-lg font-semibold mb-4'>
            <strong>Full Stack Developer</strong> at PatientBond | Mohali
          </p>
          <ul className='list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-400 text-xs md:text-sm'>
            <li>
              The current Engagement market utilizes one-size-fits-all solutions
              to reach out to patients and members, minimizing impact and
              building concerns about message fatigue.
            </li>
            <li>Created web application using React.js.</li>
            <li>
              Integrated frontend with backend and databases, including MongoDB.
            </li>
            <li>
              Creation of RESTful API endpoints and worked with the front-end to
              ensure seamless integrations.
            </li>
            <li>
              Reduced patient outreach effort through the development of
              automated workflows and RESTful APIs, improving communication
              efficiency for healthcare providers.
            </li>
          </ul>
        </WobbleCard>
      ),
    },
  ];

  return (
    <div id='workExperience'>
      <div className='flex flex-col items-center justify-center'>
        <motion.h2
          className='text-4xl md:text-7xl font-bold pt-20'
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          Work <span className='text-purple'>Experience</span>
        </motion.h2>
      </div>
      <Timeline data={experienceTimeline} />
    </div>
  );
};

export default WorkExperience;
