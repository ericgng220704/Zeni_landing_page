// "use client";

// import { TiLocationArrow } from "react-icons/ti";
// import CTAButton from "../CTAButton";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const vidRef = useRef(null);
//   const textRef = useRef(null);
//   const textRevealRef1: any = useRef(null);
//   const textRevealRef2: any = useRef(null);
//   const buttonRef = useRef(null);

//   useEffect(() => {
//     // Set the initial clip-path for the video container
//     gsap.set(vidRef.current, { clipPath: "inset(0% 0% 0% 0%)" });

//     // Animate the video container's clip-path and pin it
//     gsap.to(vidRef.current, {
//       scrollTrigger: {
//         trigger: vidRef.current,
//         start: "top top",
//         end: "bottom top",
//         scrub: true,
//         pin: true,
//       },
//       clipPath: "inset(10% 6% 45% 6% round 1.5% 1.5% 1.5% 1.5%)",
//       duration: 3,
//     });

//     // Create a timeline for the text container that pins it and then animates it downward
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: textRef.current,
//         start: "top-=500  top", // when the text reaches the top of the viewport
//         end: "bottom top", // extend the scroll distance for the pin
//         scrub: true,
//         pin: true,
//         markers: true,
//       },
//     });

//     tl.fromTo(
//       textRef.current,
//       {
//         y: 0,
//       },
//       {
//         y: 10,
//         duration: 15,
//       }
//     );

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top-=500 top",
//           end: "bottom top",
//           scrub: true,
//         },
//       })
//       .fromTo(
//         [textRevealRef1.current, textRevealRef2.current],
//         { opacity: 0 },
//         { opacity: 1, stagger: 0.2, duration: 1 }
//       );

//     gsap
//       .timeline({
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top-=500 top",
//           end: "bottom top",
//           scrub: true,
//         },
//       })
//       .fromTo(
//         [buttonRef.current],
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, stagger: 1, duration: 1 }
//       );

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[1450px] lg:mb-0 mb-44">
//       <div className="w-full min-h-fs relative z-0 flex flex-col justify-end gap-5 lg:gap-9 pb-8">
//         <div className="grow select-none rounded-2xl lg:rounded-[20px]">
//           <div
//             ref={vidRef}
//             className="absolute inset-0 -z-10 before:absolute before:inset-0"
//           >
//             <video
//               src="/intro.mp4"
//               autoPlay
//               muted
//               loop
//               className="size-full object-cover"
//             />
//           </div>
//         </div>

//         {/* Remove the absolute positioning so ScrollTrigger can pin it */}
//         <div ref={textRef} className="px-4 md:px-16 lg:px-24 flex flex-col">
//           <div className="w-full">
//             <span className="section-line" ref={textRevealRef1}>
//               {" "}
//               FAST, SECURE, AND INTUITIVE
//             </span>
//           </div>
//           <div className="flex flex-col lg:grid lg:grid-cols-5 gap-2 w-full">
//             <div className="col-span-3 text-white mb-8 lg:mb-0">
//               <h1 className="text-6xl font-semibold text-black">
//                 Your money, your journey, your{" "}
//                 <span className="rekalgera-regular italic text-7xl">Zeni</span>
//               </h1>
//             </div>
//             <div className="col-span-2 flex flex-col gap-5 pt-1">
//               <span className="text-gray-700 text-lg" ref={textRevealRef2}>
//                 {" "}
//                 Take control of your finances with powerful AI-driven insights
//                 and personalized budgeting, all wrapped up in a beautifully
//                 simple interface.
//               </span>

//               <CTAButton
//                 id="cta button hero"
//                 title="Try it now"
//                 rightIcon={<TiLocationArrow />}
//                 containerClass="bg-brand-ice-blue md:flex hidden items-center justify-center gap-1 !text-lg"
//                 ref={buttonRef}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import { useRef, useEffect } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
// import { TiLocationArrow } from "react-icons/ti";
// import CTAButton from "../CTAButton";

// gsap.registerPlugin(ScrollTrigger);

// export default function HeroSection() {
//   const wrapperRef = useRef<HTMLDivElement>(null);
//   const vidRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const textReveal1 = useRef<HTMLSpanElement>(null);
//   const textReveal2 = useRef<HTMLSpanElement>(null);
//   const buttonRef = useRef<HTMLButtonElement>(null);

//   useEffect(() => {
//     const mm = gsap.matchMedia();

//     mm.add("all", () => {
//       if (!wrapperRef.current || !vidRef.current || !textRef.current) return;

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: wrapperRef.current,
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           pin: true,
//           pinSpacing: true,
//           // markers: true, // enable for debugging
//         },
//       });

//       tl.to(
//         vidRef.current,
//         { clipPath: "inset(10% 6% 45% 6% round 1.5% 1.5% 1.5% 1.5%)" },
//         0
//       )
//         .fromTo(
//           textRef.current,
//           { yPercent: 100 },
//           { yPercent: 0, ease: "none" },
//           0.2
//         )
//         .from(textReveal1.current, { opacity: 0 }, 0.4)
//         .from(textReveal2.current, { opacity: 0 }, 0.6)
//         .from(buttonRef.current, { opacity: 0, y: 50 }, 0.8);

//       return () => {
//         tl.scrollTrigger?.kill();
//         tl.kill();
//       };
//     });

//     return () => {
//       mm.revert();
//       ScrollTrigger.getAll().forEach((t) => t.kill());
//     };
//   }, []);

//   return (
//     <section className="relative min-h-[1450px] lg:mb-0 mb-44">
//       <div
//         ref={wrapperRef}
//         className="w-full min-h-fs relative z-0 flex flex-col justify-end gap-5 lg:gap-9 pb-8"
//       >
//         <div className="grow select-none rounded-2xl lg:rounded-[20px]">
//           <div ref={vidRef} className="absolute inset-0 -z-10">
//             <video
//               src="/intro.mp4"
//               autoPlay
//               muted
//               loop
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>

//         <div ref={textRef} className="px-4 md:px-16 lg:px-24 flex flex-col">
//           <span className="section-line" ref={textReveal1}>
//             FAST, SECURE, AND INTUITIVE
//           </span>
//           <div className="flex flex-col lg:grid lg:grid-cols-5 gap-2 w-full">
//             <div className="col-span-3 text-white mb-8 lg:mb-0">
//               <h1 className="text-6xl font-semibold text-black">
//                 Your money, your journey, your{" "}
//                 <span className="rekalgera-regular italic text-7xl">Zeni</span>
//               </h1>
//             </div>
//             <div className="col-span-2 flex flex-col gap-5 pt-1">
//               <span className="text-gray-700 text-lg" ref={textReveal2}>
//                 Take control of your finances with powerful AI-driven insights
//                 and personalized budgeting, all wrapped up in a beautifully
//                 simple interface.
//               </span>
//               <CTAButton
//                 id="cta-button-hero"
//                 title="Try it now"
//                 rightIcon={<TiLocationArrow />}
//                 containerClass="bg-brand-ice-blue flex items-center justify-center gap-1 !text-lg"
//                 ref={buttonRef}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
"use client";

import { useRef, useEffect, AnchorHTMLAttributes } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { TiLocationArrow } from "react-icons/ti";
import CTAButton from "../CTAButton";

gsap.registerPlugin(ScrollTrigger);

type HeroSectionProps = {
  onVideoReady: () => void;
};

export default function HeroSection({ onVideoReady }: HeroSectionProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const vidRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const textReveal1 = useRef<HTMLSpanElement>(null);
  const textReveal2 = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement & HTMLAnchorElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const onReady = () => onVideoReady();
    if (vid.readyState >= HTMLMediaElement.HAVE_ENOUGH_DATA) {
      onReady();
    } else {
      vid.addEventListener("canplay", onReady, { once: true });
      vid.addEventListener("loadeddata", onReady, { once: true });
    }

    return () => {
      vid.removeEventListener("canplay", onReady);
      vid.removeEventListener("loadeddata", onReady);
    };
  }, [onVideoReady]);

  useEffect(() => {
    if (!vidRef.current || !textRef.current) return;

    const width = window.innerWidth;

    if (width >= 1400 && width <= 1750) {
      // IDEAL RANGE: original hero animation
      gsap.set(vidRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.to(vidRef.current, {
        clipPath: "inset(10% 6% 45% 6% round 1.5% 1.5% 1.5% 1.5%)",
        duration: 3,
        scrollTrigger: {
          trigger: vidRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
        },
      });

      // pin-and-move text down slowly
      const tlText = gsap.timeline({
        scrollTrigger: {
          trigger: textRef.current,
          start: "top-=500 top",
          end: "bottom top",
          scrub: true,
          pin: true,
          markers: false,
        },
      });
      tlText.fromTo(
        textRef.current,
        { y: 0 },
        { y: 10, duration: 15, ease: "none" }
      );

      // fade in lines
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
          [textReveal1.current, textReveal2.current],
          { opacity: 0 },
          { opacity: 1, stagger: 0.2, duration: 1 }
        );

      // fade in button
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
          buttonRef.current,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1 }
        );
    } else {
      // FALLBACK: video + text unified
      gsap.set(vidRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current!,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: true,
          markers: false,
        },
      });
      tl.to(
        vidRef.current,
        { clipPath: "inset(10% 6% 45% 6% round 1.5% 1.5% 1.5% 1.5%)" },
        0
      )
        .fromTo(
          textRef.current,
          { yPercent: 100 },
          { yPercent: 0, ease: "none" },
          0.2
        )
        .from(textReveal1.current, { opacity: 0 }, 0.4)
        .from(textReveal2.current, { opacity: 0 }, 0.6)
        .from(buttonRef.current, { opacity: 0, y: 50 }, 0.8);
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="relative min-h-[1450px] lg:mb-0">
      <div
        ref={wrapperRef}
        className="w-full min-h-fs relative z-0 flex flex-col justify-end gap-5 lg:gap-9 pb-8"
      >
        <div className="grow select-none rounded-2xl lg:rounded-[20px]">
          <div ref={vidRef} className="absolute inset-0 -z-10">
            <video
              src="/intro.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
              ref={videoRef}
            />
          </div>
        </div>

        <div ref={textRef} className="px-14 lg:px-24 flex flex-col">
          <span className="section-line" ref={textReveal1}>
            FAST, SECURE, AND INTUITIVE
          </span>
          <div className="flex flex-col lg:grid lg:grid-cols-5 gap-2 w-full">
            <div className="col-span-3 text-white mb-8 lg:mb-0">
              <h1 className="text-6xl font-semibold text-black">
                Your money, your journey, your{" "}
                <span className="rekalgera-regular italic text-7xl">Zeni</span>
              </h1>
            </div>
            <div className="col-span-2 flex flex-col gap-5 pt-1">
              <span className="text-gray-700 text-lg" ref={textReveal2}>
                Take control of your finances with powerful AI-driven insights
                and personalized budgeting, all wrapped up in a beautifully
                simple interface.
              </span>
              <CTAButton
                id="cta-button-hero"
                title="Try it now"
                href="https://zeni-ericgng.vercel.app/"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-brand-ice-blue flex items-center justify-center gap-1 !text-lg"
                ref={buttonRef}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
