"use client";
import React, { useState } from "react";
import { FloatingDock } from "./ui/FloatingDock";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import Heading from "./Heading";

const Contact = () => {
  const [toastVisible, setToastVisible] = useState(false);
  const handleEmailCopy = (
    setToastVisible: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const email = "vipulkandal@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 2000); // Hide after 2 seconds
    });
  };

  const socialMediaItems = [
    {
      title: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/vipulkandal",
      isExternal: true, // Open in new tab
    },
    {
      title: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/vipul-kandal-17374061/",
      isExternal: true, // Open in new tab
    },
    {
      title: "Twitter",
      icon: <FaTwitter />,
      href: "https://x.com/TheVipulKandal",
      isExternal: true, // Open in new tab
    },
    {
      title: "Email",
      icon: <FaEnvelope />,
      onClick: () => handleEmailCopy(setToastVisible), // Copy email to clipboard
    },
    // Add more social media links as needed
  ];
  return (
    <div
      id='contact'
      className='flex flex-col items-center justify-center py-20 h-screen relative w-full'
    >
      <div className='relative max-w-7xl mx-auto w-full h-full px-4'>
        {/* Header */}

        <Heading
          text='Ways to get in touch'
          highlightedText={["get", "in", "touch"]}
        />

        {/* Globe */}
        {/* <div className='absolute inset-0 h-full z-10'>
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div> */}

        {/* Floating Dock */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50 flex justify-center'>
          <FloatingDock
            items={socialMediaItems}
            desktopClassName='fixed bottom-4'
            mobileClassName='fixed bottom-4 right-4'
          />
          {/* Toast Notification */}
          {toastVisible && (
            <div className='fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg'>
              Email address copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
