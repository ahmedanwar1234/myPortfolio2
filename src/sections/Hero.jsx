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

  gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const grenadeRef = useRef(null); // whole grenade
  const bodyRef = useRef(null);    // exploded body
  const pinRef = useRef(null);  
    const flashRef = useRef(null);
    const bommRef = useRef(null);
    const boomRef2 = useRef(null);
  
    const [count, setCount] = useState(null);
    const [hidden, setHidden] = useState(false);
    const isMobile = useMediaQuery({ maxWidth: 853 });
    const [hideAll, setHideAll] = useState(false);

    const width = window.innerWidth;
    useLayoutEffect(() => {
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
          duration: 1,
          onStart: () => {
            setCount(0);
            gsap.fromTo("#flash", { opacity: 1 }, { opacity: 1, duration: 0.5, yoyo: true, repeat: 1 });
          },
        }, ">")
        .to({}, {
          duration: 1,
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
  return (<>
    {width < 500 ?(<>
   <section id="home" className="relative w-full min-h-screen overflow-hidden">
  <div className="relative w-full h-full flex items-start justify-center md:items-start md:justify-start c-space">

 <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
        >
       
      </figure>
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
            className="fixed lg:-bottom-[950px] -bottom-[500px] left-[60%] z-40 md:w-[20%] w-[60%] rotate-180"
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
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent pointer-events-none">
        <h1 className="counter text-[200px] md:text-[500px] opacity-0 font-bold text-white transition-all duration-500">
          {count}
        </h1>
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
</>):(<>

    <section id="home" className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space">
 <HeroText />
      <figure
        className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}
        >
        
      </figure>
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
            className="fixed lg:-bottom-[950px] -bottom-[500px] left-[60%] z-40 md:w-[20%] w-[60%] rotate-180"
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
      <div className="fixed inset-0 flex justify-center items-center z-50 bg-transparent pointer-events-none">
        <h1 className="counter text-[200px] md:text-[500px] opacity-0 font-bold text-white transition-all duration-500">
          {count}
        </h1>
      </div>

      {/* Flash */}
     {!hidden && <div
        ref={flashRef}
        id="flash"
        className="fixed top-0 left-0 w-full h-full bg-white opacity-0 z-50 pointer-events-none flex justify-center items-center"
      >
        <img src="/pngwing.com(2).png" alt="flash" />
      </div>} 
    </section>
</>)}
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
