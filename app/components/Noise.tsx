"use client";

import { useEffect, useState } from "react";

export default function Noise() {
  const [noiseData, setNoiseData] = useState<string>("");

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const size = 256;
    canvas.width = size;
    canvas.height = size;

    if (ctx) {
      const idata = ctx.createImageData(size, size);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0x10ffffff;
        }
      }

      ctx.putImageData(idata, 0, 0);
      setTimeout(() => {
        setNoiseData(canvas.toDataURL());
      }, 0);
    }
  }, []);

  if (!noiseData) return null;

  return (
    <div
      className="pointer-events-none fixed top-[-50%] left-[-50%] z-50 h-[200%] w-[200%] opacity-[0.8]"
      style={{
        backgroundImage: `url(${noiseData})`,
        animation: "noise 1s steps(10) infinite",
      }}
      aria-hidden="true"
    >
      <style jsx>{`
        @keyframes noise {
          0% {
            transform: translate(0, 0);
          }
          10% {
            transform: translate(-5%, -5%);
          }
          20% {
            transform: translate(-10%, 5%);
          }
          30% {
            transform: translate(5%, -10%);
          }
          40% {
            transform: translate(-5%, 15%);
          }
          50% {
            transform: translate(-10%, 5%);
          }
          60% {
            transform: translate(15%, 0);
          }
          70% {
            transform: translate(0, 10%);
          }
          80% {
            transform: translate(-15%, 0);
          }
          90% {
            transform: translate(10%, 5%);
          }
          100% {
            transform: translate(5%, 0);
          }
        }
      `}</style>
    </div>
  );
}
