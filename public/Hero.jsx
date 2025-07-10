"use client"
import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FaArrowDown } from "react-icons/fa6"
import { FlipText } from "../components/magicui/flip-text";
const Hero = () => {
  const heroRef = useRef()
  const boomRef = useRef()
  const bommRef = useRef()
  const pinRef = useRef()
  const smokeRef = useRef()
  const bottombye = useRef()
  const resumeRef = useRef()
  const shadowRef = useRef()
  const boomRef2=useRef()
  

  const [count, setCount] = useState(3)
const [hidden,setHidden]=useState(false)
  gsap.registerPlugin(ScrollTrigger)
  const hasAnimated=useRef(false)

  // Track visibility of Hero section using IntersectionObserver


  // GSAP Animation
  useGSAP(() => {
     if (hasAnimated.current) return
    hasAnimated.current = true
    

    const isMobile = window.innerWidth < 500

    gsap.to(shadowRef.current, {
      repeat: -1,
      x: 400,
      duration: 2,
    })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boomRef.current,
        start: 'bottom bottom',
        end: isMobile ? '+=1000' : '+=500',
      }
    })

    tl.to(boomRef.current, { y: 400 })
      .to(
        [pinRef.current, bommRef.current],
        { y: -800, x: -50, rotate: 360, ease: "back.out", duration: 7 },
      )
      .to(".counter", {
        opacity: 0.2,
        duration: 1,
        onStart: () => setCount(3),
      }, "-=6")
      .to({}, { duration: 1, onStart: () => setCount(2) }, ">")
      .to({}, { duration: 1, onStart: () => setCount(1) }, ">")
      .to({}, {
        duration: 1,
        onStart: () => {
          setCount(0)
          gsap.fromTo("#flash", { opacity: 1 }, { opacity: 1, duration: 0.5, yoyo: true, repeat: 1 })
        },
      }, ">")
      .to({}, {
        duration: 1,
        onComplete: () => {setCount(null)
setHidden(!hidden)
        },
      }, ">",)
      .to("#flash", { opacity: 0 }, ">",)
      .to([pinRef.current, bommRef.current], { opacity: 0 }, "-=2")

    isMobile && setTimeout(() => ScrollTrigger.refresh(), 100)
  }, [])


  const onHover = () => {
    gsap.fromTo(
      bottombye.current,
      { rotateZ: 0, transformOrigin: 'bottom center' },
      { rotateZ: 30, yoyo: true, repeat: 3, duration: 0.2, ease: 'power1.inOut' }
    )
  }

  const onHoverResume = () => {
    gsap.fromTo(resumeRef.current, { y: 0 }, {
      y: 6, yoyo: true, repeat: 3, duration: 0.1, ease: "power1.inOut"
    })
  }

  return (
    <div ref={heroRef}  className='flex flex-col items-center gap-y-5'>
      <div className='relative overflow-hidden lg:mt-[150px] mt-[50px] border-[0.5px] text-[11px] lg:text-[14px] rounded-2xl border-gray-600 px-3 py-2 hover-text'>
        Actively Seeking Job Opportunities
        <div ref={shadowRef} className='absolute -top-2 -left-20 w-3 h-14 bg-[rgba(255,255,255,0.7)] rotate-z-[30deg] shadow-[0px_0px_10px] shadow-gray-400 rounded-4xl'></div>
      </div>

      <h1 className='mt-10 font-bold lg:text-6xl text-3xl text-center hover-text'>
        Crafting Beautiful & <br /> Functional Web Experiences
      </h1>
      <p className='text-center text-[13px] lg:text-[20px] w-[75%] font-normal hover-text'>
        Hey, I'm <FlipText>Ahmed Anwar</FlipText>, a Full Stack Developer passionate about building performant, user-friendly, and scalable applications.
      </p>

      <div className='flex items-center gap-6'>
        <button
          onMouseEnter={onHover}
          className='hover:scale-105 duration-300 bg-transparent border-[0.5px] border-gray-600 px-6 py-1 rounded-2xl flex items-center gap-4'
        >
          <img ref={bottombye} className='w-10' src="/waving-hand.png" alt="wave" />
          <h2> Let's Connect</h2>
        </button>

        <button
          onMouseEnter={onHoverResume}
          className='hover:scale-105 duration-300 group border-[0.5px] border-gray-600 px-7 py-2 rounded-2xl flex items-center gap-4'
        >
          <h2>Resume</h2>
          <FaArrowDown
            ref={resumeRef}
            className="font-normal w-4"
            size={30}
            color="#ffffff"
          />
        </button>
      </div>

      {hidden &&   <img ref={boomRef2} className=' -bottom-6 z-40 md:w-[20%] w-[60%]' src="/pngwing.com.png" alt="" />}

      {/* 🎯 Show grenade images only if visible */}
     
        <>
          <img ref={boomRef} className='fixed -bottom-6 z-40 md:w-[20%] w-[60%]' src="/pngwing.com.png" alt="" />
          <img ref={bommRef} className='fixed lg:-bottom-[950px] -bottom-[500px] left-[60%] z-40 md:w-[20%] w-[60%] rotate-180' src="/pngwing.com.png" alt="" />
          <img ref={pinRef} className='z-40 fixed -bottom-[500px] left-[20%] md:w-[10%] w-[30%]' src="/pin.png" alt="" />
        </>
     

      <div className='fixed inset-0 flex justify-center items-center z-10 bg-transparent pointer-events-none'>
        <h1 className='counter text-[500px] opacity-0 font-bold text-white'>{count}</h1>
      </div>

      <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-white opacity-0 z-50 pointer-events-none" id="flash">
        <img src="/pngwing.com(2).png" alt="" />
      </div>

      <div className="fixed bottom-[120px] left-[50%] translate-x-[-50%] z-40 pointer-events-none">
        <div ref={smokeRef} className="smoke w-10 h-10 rounded-full bg-white/10 blur-sm opacity-0" />
      </div>
    </div>
  )
}

export default Hero
