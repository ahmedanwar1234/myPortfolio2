'use client'
import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';    

import {
  AiFillHome,
  AiOutlineUser,
  AiOutlineMail,
  AiFillGithub,
} from 'react-icons/ai';
import { FaCode, FaLinkedinIn } from 'react-icons/fa';

const Header = () => {
  const containerRef = useRef();

  useGSAP(() => {
    // Add GSAP logic here if needed
  }, []);

  const iconStyle = `after:font-bold 
    relative hover:scale-110 duration-300 
    hover:rounded-full hover:p-2 
    hover:bg-gray-400/30 
    bg-[rgba(0,0,0,0.1)] font-light 
    cursor-pointer text-[10px]
    after:absolute after:bottom-[-100%] after:left-[10%]`;

  return (
    <div className="z-50 h-[50px] mt-8">
      <div
        ref={containerRef}
        className="fixed lg:left-[50%] -translate-x-1/2 bg-black items-center 
        border-[1px] border-gray-500 shadow-[1px_1px_20px_] shadow-gray-500 
        rounded-3xl py-4 lg:hover:py-6 lg:hover:px-8 transition-all duration-300 
        px-6 flex flex-row gap-6 lg:gap-7 "
      >
        <a href="#home">

        <div className={`${iconStyle} hover:after:content-['Home']`}>
          <AiFillHome size={21} color="#f8f8f8" />
        </div>
        </a>

<a href="#about">

        <div className={`${iconStyle} hover:after:content-['About']`}>
          <AiOutlineUser size={21} color="#f8f8f8" />
        </div>
</a>

<a href="#projects">

        <div className={`${iconStyle} hover:after:content-['Projects']`}>
          <FaCode size={21} color="#f8f8f8" />
        </div>
</a>
<a   href="#contact">

        <div className={`${iconStyle} hover:after:content-['Contact']`}>
          <AiOutlineMail size={21} color="#f8f8f8" />
        </div>
</a>
<a href="https://www.linkedin.com/in/ahmed-anwar-%20%20%20%20%2004173725b">
 <div className={`${iconStyle} hover:after:content-['LinkedIn']`}>
          <FaLinkedinIn size={21} color="#f8f8f8" />
        </div></a>
       
<a href="https://github.com/ahmedanwar1234">
        <div className={`${iconStyle} hover:after:content-['Github']`}>
          <AiFillGithub size={21} color="#f8f8f8" />
        </div>
</a>

      </div>
    </div>
  );
};

export default Header;
