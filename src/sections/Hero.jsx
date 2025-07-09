import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/parallaxBackground";
import { Astronaut } from "../components/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import { Suspense, useLayoutEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { FaArrowDown } from "react-icons/fa";

  gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
    const bottombye = useRef()
  const resumeRef = useRef()
  const grenadeRef = useRef(null); // whole grenade
  const bodyRef = useRef(null);    // exploded body
  const pinRef = useRef(null);  
    const flashRef = useRef(null);
    const bommRef = useRef(null);
    const boomRef2 = useRef(null);
  const shadowRef=useRef(null)
    const [count, setCount] = useState(null);
    const [hidden, setHidden] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 853 });
    const [hideAll, setHideAll] = useState(false);

    const width = window.innerWidth;
    useLayoutEffect(() => {
       gsap.to(shadowRef.current, {
      repeat: -1,
      x: 400,
      duration: 2,
    })

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: grenadeRef.current,
          start: "top center",
          end: "+=700",
          scrub: false,once:true
        },
      });

      // hide first grenade and show explosion parts
      tl.to(grenadeRef.current, { y:400,opacity: 0, duration: 0.3 })
        .fromTo(
          [bodyRef.current, pinRef.current],
          { opacity: 1 },
          {
            y: -800,
            x: -50,
            rotate: 360,
            duration: 7,
            ease: "back.out",
          }
        )
        .to(
          ".counter",
          {
            opacity: 1,
            duration: 1,
            onStart: () => setCount(3),
          },
          "-=6"
        )
        .to({}, { duration: 1, onStart: () => setCount(2) }, ">")
        .to({}, { duration: 1, onStart: () => setCount(1) }, ">")
        .to({}, {
          duration: 0.05,
          onStart: () => {
            setCount(0);
            gsap.fromTo("#flash", { opacity: 1 }, { opacity: 1, duration: 0.1  });
          },
        }, ">")
        .to({}, {
          duration: 0.1,
          onComplete: () => {
            setCount(null);
            setHideAll(true); // hide everything,
            
          },
        }, ">")
        .to("#flash", { opacity: 0 ,onComplete:()=>setHidden(!hidden)}, ">");

      ScrollTrigger.refresh();
    });




    return () => ctx.revert();
  }, []);
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
  return (<>

   <section id="home" className=" relative w-screen  min-h-screen overflow-hidden">

  <div className=" flex-col mt-20  relative w-full h-full flex items-center     ">
<div className=' mb-10  relative overflow-hidden lg:mt-[150px] mt-[50px] border-[0.5px] text-[11px] lg:text-[14px] rounded-2xl border-gray-400 px-3 py-2 hover-text'>
        Actively Seeking Job Opportunities
        <div ref={shadowRef} className='absolute -top-2 -left-20 w-3 h-14 bg-[rgba(255,255,255,0.7)] rotate-z-[30deg] shadow-[0px_0px_10px] shadow-gray-400 rounded-4xl'></div>
      </div>
 <HeroText />

  <div className='flex max-sm:flex-col  mt-20 items-center gap-6 '>
   <a href="#contact">  <button
    onMouseEnter={onHover}
    className="hover:scale-105 cursor-pointer duration-300 bg-transparent border border-gray-200 px-6 py-2 rounded-2xl flex items-center justify-center gap-2 min-w-[180px] h-[52px]"
  >
    <img ref={bottombye} className="w-10" src="/waving-hand.png" alt="wave" />
    <h2 className="font-bold">Let's Talk</h2>
  </button></a>
{/* http://acs.amazonaws.com/groups/global/AllUsers */}
  {/* Resume Button */}
  <a   
 download href="https://anwarhizenburg.s3.us-east-1.amazonaws.com/AhmedAnwar.pdf">
  
  <button
    onMouseEnter={onHoverResume}
    className="hover:scale-105 cursor-pointer duration-300 border border-gray-200 px-6 py-2 rounded-2xl flex items-center justify-center gap-2 min-w-[180px] h-[52px]"
  >
    <h2 className="font-bold">Resume</h2>
    <FaArrowDown
      ref={resumeRef}
      className="w-4"
      size={20}
      color="#ffffff"
    />
  </button>
  </a>
      </div>
    
       {/* Normal grenade before boom */}
      {!hideAll && (
        <img
        ref={grenadeRef}
        className="fixed bottom-6  left-[50%] -translate-x-1/2 z-40 md:w-[20%] w-[60%]"
        src="/pngwing.com.png"
        alt="grenade"
        />
      )}

      {/* Boom parts */}
      {!hideAll && (
        <>
          <img
            ref={bodyRef}
            className="fixed  lg:-bottom-[950px] -bottom-[500px] left-[60%] z-40 md:w-[20%] w-[60%] rotate-180"
            src="/pngwing.com.png"
            alt="body"
            />
          <img
            ref={pinRef}
            className="fixed -bottom-[500px] left-[20%] z-40 md:w-[10%] w-[30%]"
            src="/pin.png"
            alt="pin"
            />
        </>
      )}

      {/* Countdown */}
       <div className='fixed inset-0 flex justify-center items-center -z-10 bg-transparent pointer-events-none'>
        <h1 className='counter text-[500px] opacity-0 font-bold text-white'>{count}</h1>
      </div>


      {/* Flash */}
     {!hidden && <div
        ref={flashRef}
        id="flash"
        className="fixed top-0 left-0 w-full h-full bg-white opacity-0 z-50 pointer-events-none flex justify-center items-center"
      >
        <img src="/pngwing.com(2).png" alt="flash" />
      </div>} 
</div>
    </section>
     </>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
