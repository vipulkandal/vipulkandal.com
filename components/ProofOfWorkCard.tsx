import React from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa"; // Importing the GitHub and external link icons

interface ProofOfWorkCardProps {
  imagePath: string;
  githubLink: string;
  liveSiteLink: string;
  techStack: string[];
}

const ProofOfWorkCard: React.FC<ProofOfWorkCardProps> = ({
  imagePath,
  githubLink,
  liveSiteLink,
  techStack,
}) => {
  return (
    <div className='bg-white p-4 border border-gray-300 shadow-lg text-center font-sans w-[250px] transition-transform transform hover:scale-110'>
      <Image
        src={imagePath}
        alt='Project Screenshot'
        width={350}
        height={250}
        className='w-full h-auto border-b-4 border-white'
      />
      <div className='mt-4'>
        <div className='flex flex-wrap justify-center space-x-1 space-y-1'>
          {techStack.map((tech, index) => (
            <span
              key={index}
              className='bg-gray-200 text-gray-800 py-1 px-2 rounded-full text-sm font-medium'
            >
              {tech}
            </span>
          ))}
        </div>

        <div className='flex justify-center mt-4 space-x-4'>
          <a
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-700'
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
          <a
            href={liveSiteLink}
            target='_blank'
            rel='noopener noreferrer'
            className='flex items-center space-x-2 text-blue-500 font-bold hover:text-blue-700'
          >
            <FaExternalLinkAlt />
            <span>Live Site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProofOfWorkCard;
