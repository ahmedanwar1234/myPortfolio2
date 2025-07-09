"use client";

import Globe from 'react-globe.gl';
import { useEffect, useRef } from 'react';

const MiniGlobe = () => {
  const globeRef = useRef();

  useEffect(() => {
    if (!globeRef.current) return;

    globeRef.current.controls().autoRotate = true;
    globeRef.current.controls().autoRotateSpeed = 0.5; // smooth rotation
    globeRef.current.controls().enableZoom = false; // disable zoom for simplicity
  }, []);

  return (
    <div
      className="absolute    "
      style={{ width: 250, height: 250 }}
    >
      <Globe
        ref={globeRef}
globeImageUrl="/assets/earthh.jpg"        
backgroundColor="rgba(0,0,0,0)"
        width={300}
        height={300}
      />
    </div>
  );
};

export default MiniGlobe;
