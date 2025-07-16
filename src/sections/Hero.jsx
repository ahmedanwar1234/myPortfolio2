import { useEffect, useRef } from "react";
import HeroText from "../components/HeroText";
import { FaArrowDown } from "react-icons/fa";
import gsap from "gsap";

const Hero = () => {
  const bottombye = useRef();
  const resumeRef = useRef();
  const shadowRef = useRef()


  useEffect(()=>{

    gsap.to(shadowRef.current, {
      repeat: -1,
      x: 400,
      duration: 2,
    })
  },[])
  const onHover = () => {
    gsap.fromTo(
      bottombye.current,
      { rotateZ: 0, transformOrigin: "bottom center" },
      { rotateZ: 30, yoyo: true, repeat: 3, duration: 0.2, ease: "power1.inOut" }
    );
  };

  const onHoverResume = () => {
    gsap.fromTo(resumeRef.current, { y: 0 }, {
      y: 6, yoyo: true, repeat: 3, duration: 0.1, ease: "power1.inOut"
    });
  };

  return (
    <section id="home" className="relative w-screen min-h-screen overflow-hidden">
      <div className="flex-col mt-20 relative w-full h-full flex items-center">
        <div className="mb-10 relative overflow-hidden lg:mt-[150px] mt-[50px] border-[0.5px] text-[11px] lg:text-[14px] rounded-2xl border-gray-400 px-3 py-2 hover-text">
          Actively Seeking Job Opportunities
                  <div ref={shadowRef} className='absolute -top-2 -left-20 w-3 h-14 bg-[rgba(255,255,255,0.7)] rotate-z-[30deg] shadow-[0px_0px_10px] shadow-gray-400 rounded-4xl'></div>

        </div>

        <HeroText />

        <div className="flex max-sm:flex-col mt-20 items-center gap-6">
          {/* Let's Talk Button */}
          <a href="#contact">
            <button
              onMouseEnter={onHover}
              className="hover:scale-105 cursor-pointer duration-300 bg-transparent border border-gray-200 px-6 py-2 rounded-2xl flex items-center justify-center gap-2 min-w-[180px] h-[52px]"
            >
              <img ref={bottombye} className="w-10" src="/waving-hand.png" alt="wave" />
              <h2 className="font-bold">Let's Talk</h2>
            </button>
          </a>

          {/* Resume Button */}
          <a download href="https://anwarhizenburg.s3.us-east-1.amazonaws.com/AhmedAnwar.pdf">
            <button
              onMouseEnter={onHoverResume}
              className="hover:scale-105 cursor-pointer duration-300 border border-gray-200 px-6 py-2 rounded-2xl flex items-center justify-center gap-2 min-w-[180px] h-[52px]"
            >
              <h2 className="font-bold">Resume</h2>
              <FaArrowDown ref={resumeRef} className="w-4" size={20} color="#ffffff" />
            </button>
          </a>
        </div>

      </div>
      </section>
  );
};

export default Hero;
