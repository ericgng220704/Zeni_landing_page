"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSection from "@/components/sections/Hero";
import { InfiniteSliderSection } from "@/components/sections/InfiniteSlider";
import NavBar from "@/components/Navbar";
import ProductSection from "@/components/sections/Product";
import IntroSection from "@/components/sections/Intro";
import DemoSection from "@/components/sections/HowItWorks";
import AppDemo from "@/components/sections/Demo";
import Footer from "@/components/sections/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const sliderWrapperRef: any = useRef(null);
  const productRef = useRef(null);

  const [videoReady, setVideoReady] = useState(false);

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
    <div className="relative">
      {!videoReady && (
        <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
          <div className="animate-spin h-16 w-16 border-4 border-t-blue-600 rounded-full" />
        </div>
      )}

      <main
        className={`transition-opacity duration-500 ${
          videoReady ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <NavBar />
        <HeroSection onVideoReady={() => setVideoReady(true)} />
        <InfiniteSliderSection />
        <div ref={sliderWrapperRef} className="lg:mt-28 ">
          <IntroSection />
        </div>

        <div ref={productRef} className="">
          <ProductSection />
        </div>
        <DemoSection />
        <AppDemo />
        <Footer />
      </main>
    </div>
  );
}
