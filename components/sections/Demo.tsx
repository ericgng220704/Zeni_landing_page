"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function AppDemo() {
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = videoRef.current;
    console.log(el);
    if (!el) return;

    // set up initial state: fully clipped (invisible), up above, scaled down
    gsap.set(el, {
      scale: 0,
      clipPath: "inset(0% 0% 100% 0% round 8px)",
      opacity: 0,
    });

    // animate as you scroll
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: "top 100%", // enter viewport
        end: "top 50%", // mid‑way through
        scrub: true,
      },
      scale: 1, // full size
      clipPath: "inset(1.2% 6% 0% 6% round 8px)", // fully revealed
      opacity: 1,
      duration: 5,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="bg-black my-44 rounded-[4rem] py-20">
      <div className="w-full flex flex-col gap-1.5 items-center justify-center">
        <span className="section-line text-brand-ice-blue">DEMONSTATION</span>
        <h2 className="h2 text-white">A Quick look at Zeni</h2>
      </div>

      <div className="" ref={videoRef}>
        <video
          src="/demo.mp4"
          autoPlay
          muted
          loop
          className="size-full object-cover"
        />
      </div>
    </div>
  );
}
