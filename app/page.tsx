"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/sections/Hero";
import { InfiniteSliderSection } from "@/components/sections/InfiniteSlider";
import NavBar from "@/components/Navbar";
import ProductSection from "@/components/sections/Product";
import IntroSection from "@/components/sections/Intro";
import DemoSection from "@/components/sections/HowItWorks";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sliderWrapperRef: any = useRef(null);
  const productRef = useRef(null);

  useEffect(() => {
    // First, pin the slider so it stays fixed during the scroll.
    ScrollTrigger.create({
      trigger: sliderWrapperRef.current,
      start: "top top",
      end: () => "+=" + sliderWrapperRef.current.offsetHeight,
      pin: true,
      pinSpacing: false,
    });

    // Then, animate the ProductSection upward as the user scrolls beyond the slider.
    gsap.fromTo(
      productRef.current,
      { y: 100 }, // start slightly offset downward
      {
        y: 0, // move to its natural position
        scrollTrigger: {
          trigger: sliderWrapperRef.current,
          start: "bottom top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className="">
      <NavBar />

      {/* Wrap the infinite slider in a container */}
      <HeroSection />
      <InfiniteSliderSection />
      <div ref={sliderWrapperRef} className="mt-28">
        <IntroSection />
      </div>

      <div ref={productRef} className="">
        <ProductSection />
      </div>
      <DemoSection />
      <div className="min-h-dvh flex items-center justify-center bg-">
        <div className="">
          <video
            src="/demo.mp4"
            autoPlay
            muted
            loop
            className="size-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}
