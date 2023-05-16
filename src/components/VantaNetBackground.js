import React, { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";

const VantaNetBackground = () => {
  const myRef = useRef(null);
  useEffect(() => {
    const vantaEffect = NET({
      el: myRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0xffffff,
      backgroundColor: 0x121212,
      points: 20.0,
      maxDistance: 17.0,
      spacing: 17.0,
      showDots: false,
    });
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);
  return <div ref={myRef} className="vanta-background" />;
};

export default VantaNetBackground;
