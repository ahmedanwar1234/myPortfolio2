import React from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiences from "./sections/Experiences";
import Contact from "./sections/Contact";
import Footer from './sections/Footer';
import ParallaxBackground from "./components/parallaxBackground";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl overflow-hidden">
      <div className=" fixed z-50 -translate-x-[50%] left-[50%]">

      <Navbar />
      </div>
      <div className="  flex items-center ">
              <ParallaxBackground />

      <Hero />
      </div>
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer/>
    </div>
  );
};

export default App;





    
  // useLayoutEffect(() => {
  //   if (!boomRef.current) return;

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: boomRef.current,
  //       start: "top center", // more reliable than "bottom 0%"
  //       end: "+=400",
  //       toggleActions: "play none none reverse",
  //       // markers: true, // uncomment to debug
  //     },
  //   });

  //   tl.to(boomRef.current, { y: 400 })
  //     .to(
  //       [pinRef.current, bommRef.current],
  //       { y: -800, x: -50, rotate: 360, ease: "back.out", duration: 7 },
  //       "<"
  //     )
  //     .to(".counter", {
  //       opacity: 1,
  //       duration: 1,
  //       onStart: () => setCount(3),
  //     }, "-=6")
  //     .to({}, { duration: 1, onStart: () => setCount(2) }, ">")
  //     .to({}, { duration: 1, onStart: () => setCount(1) }, ">")
  //     .to({}, {
  //       duration: 1,
  //       onStart: () => {
  //         setCount(0);
  //         gsap.fromTo("#flash", { opacity: 1 }, { opacity: 1, duration: 0.5, yoyo: true, repeat: 1 });
  //       },
  //     }, ">")
  //     .to({}, {
  //       duration: 1,
  //       onComplete: () => {
  //         setCount(null);
  //         setHidden(true);
  //       },
  //     }, ">")
  //     .to("#flash", { opacity: 0 }, ">")
  //     .to([pinRef.current, bommRef.current], { opacity: 0 }, "-=2");

  //   // Refresh ScrollTrigger just in case
  //   ScrollTrigger.refresh();
  // }, []);



  // const boomRef = useRef(null);
  // const pinRef = useRef(null);
  // const bommRef = useRef(null);
  // const boomRef2 = useRef(null);

  // const [count, setCount] = useState(null);
  // const [hidden, setHidden] = useState(false);
  // const isMobile = useMediaQuery({ maxWidth: 853 });
