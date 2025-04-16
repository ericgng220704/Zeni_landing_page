"use client";

import { TiLocationArrow } from "react-icons/ti";
import CTAButton from "../CTAButton";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const vidRef = useRef(null);
  const textRef = useRef(null);
  const textRevealRef1: any = useRef(null);
  const textRevealRef2: any = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    // Set the initial clip-path for the video container
    gsap.set(vidRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

    // Animate the video container's clip-path and pin it
    gsap.to(vidRef.current, {
      scrollTrigger: {
        trigger: vidRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
      clipPath: "inset(10% 6% 45% 6% round 1.5% 1.5% 1.5% 1.5%)",
      duration: 3,
    });

    // Create a timeline for the text container that pins it and then animates it downward
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top-=500  top", // when the text reaches the top of the viewport
        end: "bottom top", // extend the scroll distance for the pin
        scrub: true,
        pin: true,
      },
    });

    tl.fromTo(
      textRef.current,
      {
        y: 0,
      },
      {
        y: 10,
        duration: 15,
      }
    );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        [textRevealRef1.current, textRevealRef2.current],
        { opacity: 0 },
        { opacity: 1, stagger: 0.2, duration: 1 }
      );

    gsap
      .timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
        },
      })
      .fromTo(
        [buttonRef.current],
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 1, duration: 1 }
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="relative min-h-[1450px]">
      <div className="w-full min-h-fs relative z-0 flex flex-col justify-end gap-5 lg:gap-9 pb-8">
        <div className="grow select-none rounded-2xl lg:rounded-[20px]">
          <div
            ref={vidRef}
            className="absolute inset-0 -z-10 before:absolute before:inset-0"
          >
            <video
              src="/intro.mp4"
              autoPlay
              muted
              loop
              className="size-full object-cover"
            />
          </div>
        </div>

        {/* Remove the absolute positioning so ScrollTrigger can pin it */}
        <div ref={textRef} className="md:px-16 lg:px-24 flex flex-col">
          <div className="w-full">
            <span className="section-line" ref={textRevealRef1}>
              {" "}
              FAST, SECURE, AND INTUITIVE
            </span>
          </div>
          <div className="grid grid-cols-5 gap-2 w-full">
            <div className="col-span-3 text-white">
              <h1 className="text-6xl font-semibold text-black">
                Your money, your journey, your{" "}
                <span className="rekalgera-regular italic text-7xl">Zeni</span>
              </h1>
            </div>
            <div className="col-span-2 flex flex-col gap-5 pt-1">
              <span className="text-gray-700 text-lg" ref={textRevealRef2}>
                {" "}
                Take control of your finances with powerful AI-driven insights
                and personalized budgeting, all wrapped up in a beautifully
                simple interface.
              </span>

              <CTAButton
                id="cta button hero"
                title="Try it now"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-brand-ice-blue md:flex hidden items-center justify-center gap-1 !text-lg"
                ref={buttonRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
