import { BsDownload } from "react-icons/bs";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FloatingDock } from "./ui/FloatingDock";
import { IconBrandGithub, IconBrandTwitterFilled } from "@tabler/icons-react";

const Hero = () => {
  const links = [
    
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
    {
      title: "X",
      icon: (
        <IconBrandTwitterFilled className='h-full w-full text-neutral-500 dark:text-neutral-300' />
      ),
      href: "#",
    },
  ];
  return (
    <div className='relative min-h-screen flex flex-col justify-center items-center pb-20 pt-36'>
      <div className='absolute inset-0 pointer-events-none'>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill='white'
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill='purple'
        />
        <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='blue' />
      </div>

      <div
        className='absolute inset-0 w-full min-h-screen dark:bg-black-100 bg-white 
        dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] flex items-center justify-center'
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          className='absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100
          bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]'
        />
      </div>

      <div className='relative z-10 flex justify-center my-20'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <p className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            Software Developer
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          {/* Uncomment the following for actual use */}
          <TextGenerateEffect
            words={`Hi, I'm Vipul Kandal, Turning Ideas into Scalable Software Solutions`}
            // words={`Hi, I'm Vipul Kandal, crafting digital experiences that bring ideas to life!`}
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
          />

          {/* <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            Hi! I&apos;m Vipul Kandal, a Next.js Developer based in India.
          </p> */}

          <a href='#about'>
            <MagicButton
              title='Download CV'
              icon={<BsDownload />}
              position='right'
            />
          </a>
        </div>
      </div>

      <div className='flex items-center  w-full'>
        <FloatingDock items={links} />
      </div>
    </div>
  );
};

export default Hero;
