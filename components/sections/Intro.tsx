"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Cube from "../3d/Cube3D";

export default function IntroSection() {
  useEffect(() => {
    const svgs = gsap.utils.toArray(".rotating-svg");
    svgs.forEach((svg: any) => {
      // Create a continuous rotation tween
      const tween = gsap.to(svg, {
        rotation: 360,
        ease: "none",
        repeat: -1,
        duration: 10, // normal rotation speed
      });
      // Define event handlers to change the tween speed on hover
      const handleMouseEnter = () => tween.timeScale(2.5); // faster on hover
      const handleMouseLeave = () => tween.timeScale(1); // revert back

      svg.addEventListener("mouseenter", handleMouseEnter);
      svg.addEventListener("mouseleave", handleMouseLeave);

      // Save the handlers for cleanup
      svg._handleMouseEnter = handleMouseEnter;
      svg._handleMouseLeave = handleMouseLeave;
    });
    // Cleanup event listeners on unmount
    return () => {
      svgs.forEach((svg: any) => {
        svg.removeEventListener("mouseenter", svg._handleMouseEnter);
        svg.removeEventListener("mouseleave", svg._handleMouseLeave);
      });
    };
  }, []);

  return (
    <section className="px-4 md:px-16 lg:px-24 w-full h-dvh md:pt-16 lg:pt-28 pt-8">
      <div className="md:flex md:flex-col md:gap-8 lg:grid lg:grid-cols-2 xl:gap-8">
        <div className="flex flex-col text-left col-span-1">
          <div className="w-full">
            <span className="section-line">Introduction </span>
          </div>
          <h1 className="text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-black mt-2 mb-8">
            Because your financial story is personal
          </h1>
          <div className="flex flex-col gap-4 pr-24">
            <span className="text-gray-700 text-lg">
              At Zeni, we understand your finances represent more than just
              numbers—they reflect your dreams, goals, and daily choices. We
              believe each person deserves a financial companion that genuinely
              understands their unique needs.
            </span>
            <span className="text-gray-700 text-lg mt-2">
              That’s why we've crafted an app that listens, learns, and grows
              alongside you.
            </span>
          </div>
          <div className="w-full hidden lg:flex lg:mt-20 xl:mt-36 gap-6 items-center pr-24">
            <div>
              <svg
                className="rotating-svg"
                width="30"
                height="30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_238_1284)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 0H0V100C0 155.228 44.7715 200 100 200C155.228 200 200 155.228 200 100V0H150C122.386 0 100 22.3858 100 50C100 22.3858 77.6142 0 50 0Z"
                    fill="url(#paint0_linear_238_1284)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_238_1284"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4e7a8e" />
                    <stop offset="1" stopColor="#f7f4e9" />
                  </linearGradient>
                  <clipPath id="clip0_238_1284">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="rotating-svg"
                width="30"
                height="30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_238_1269)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M75.5492 178.786L75.5488 178.787L62.9138 166.152C62.9709 166.927 63 167.71 63 168.5C63 185.897 48.897 200 31.5 200C14.103 200 0 185.897 0 168.5C0 151.103 14.103 137 31.5 137C32.2899 137 33.073 137.029 33.8483 137.086L20.8627 124.101L20.8654 124.098C7.95846 110.931 0 92.8947 0 73C0 32.6832 32.6832 0 73 0C92.8947 0 110.931 7.95845 124.098 20.8654L124.1 20.863L124.491 21.2532C124.576 21.3384 124.662 21.4239 124.747 21.5095L137.086 33.849C137.029 33.0735 137 32.2901 137 31.5C137 14.103 151.103 0 168.5 0C185.897 0 200 14.103 200 31.5C200 48.897 185.897 63 168.5 63C167.71 63 166.927 62.9709 166.151 62.9137L178.492 75.2547C178.577 75.3389 178.661 75.4234 178.745 75.508L178.786 75.5491L178.786 75.5492C191.898 88.7461 200 106.927 200 127C200 167.317 167.317 200 127 200C106.927 200 88.7461 191.898 75.5492 178.786Z"
                    fill="url(#paint0_linear_238_1269)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_238_1269"
                    x1="14"
                    y1="26"
                    x2="179"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4e7a8e" />
                    <stop offset="1" stopColor="#f7f4e9" />
                  </linearGradient>
                  <clipPath id="clip0_238_1269">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="rotating-svg"
                width="30"
                height="30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_234_869)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M50 0H0V100H50C22.3858 100 0 122.386 0 150V200H100V150C100 177.614 122.386 200 150 200H200V100H150C177.614 100 200 77.6142 200 50V0H100V50C100 22.3858 77.6142 0 50 0ZM100 100H50C77.6142 100 100 122.386 100 150V100ZM100 100V50C100 77.6142 122.386 100 150 100H100Z"
                    fill="url(#paint0_linear_234_869)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_234_869"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4e7a8e" />
                    <stop offset="1" stopColor="#f7f4e9" />
                  </linearGradient>
                  <clipPath id="clip0_234_869">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="rotating-svg"
                width="30"
                height="30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_231_648)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M100 33.6449C92.7738 33.6449 86.9159 39.5028 86.9159 46.729H53.271C53.271 20.9213 74.1923 0 100 0C125.808 0 146.729 20.9213 146.729 46.729C146.729 72.5367 125.808 93.4579 100 93.4579V59.8131C107.226 59.8131 113.084 53.9551 113.084 46.729C113.084 39.5028 107.226 33.6449 100 33.6449ZM166.355 100C166.355 92.7738 160.497 86.9159 153.271 86.9159L153.271 53.271C179.079 53.271 200 74.1923 200 100C200 125.808 179.079 146.729 153.271 146.729C127.463 146.729 106.542 125.808 106.542 100H140.187C140.187 107.226 146.045 113.084 153.271 113.084C160.497 113.084 166.355 107.226 166.355 100ZM46.729 113.084C39.5028 113.084 33.6449 107.226 33.6449 100C33.6449 92.7738 39.5028 86.9159 46.729 86.9159C53.9551 86.9159 59.8131 92.7738 59.8131 100H93.4579C93.4579 74.1923 72.5367 53.271 46.729 53.271C20.9213 53.271 0 74.1923 0 100C0 125.808 20.9213 146.729 46.729 146.729V113.084ZM100 166.355C107.226 166.355 113.084 160.497 113.084 153.271H146.729C146.729 179.079 125.808 200 100 200C74.1923 200 53.271 179.079 53.271 153.271C53.271 127.463 74.1923 106.542 100 106.542L100 140.187C92.7738 140.187 86.9159 146.045 86.9159 153.271C86.9159 160.497 92.7738 166.355 100 166.355Z"
                    fill="url(#paint0_linear_231_648)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_231_648"
                    x1="100"
                    y1="0"
                    x2="100"
                    y2="200"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4e7a8e" />
                    <stop offset="1" stopColor="#f7f4e9" />
                  </linearGradient>
                  <clipPath id="clip0_231_648">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div>
              <svg
                className="rotating-svg"
                width="30"
                height="30"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_231_713)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M90 32V3.93402e-06H32L5.69126e-06 0L0 22.6274L5.69126e-06 32V90H32V54.6274L63.1319 85.7593L77.3726 100L63.1319 114.241L32 145.373L32 110L1.099e-05 110L1.02983e-05 168L5.9827e-06 200L22.6274 200L32 200H90V168H54.6274L85.7593 136.868L100 122.627L114.241 136.868L145.373 168H110L110 200H168L200 200L200 177.373L200 168L200 110L168 110V145.373L136.868 114.241L122.627 100L136.868 85.7593L168 54.6274L168 90H200L200 32V5.69126e-06L177.373 0L168 4.2925e-06L110 0V32L145.373 32L114.241 63.1319L100 77.3726L85.7593 63.1318L54.6274 32L90 32Z"
                    fill="url(#paint0_linear_231_713)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_231_713"
                    x1="14"
                    y1="26"
                    x2="179"
                    y2="179.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#4e7a8e" />
                    <stop offset="1" stopColor="#f7f4e9" />
                  </linearGradient>
                  <clipPath id="clip0_231_713">
                    <rect width="200" height="200" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        <div className="col-span-1 flex items-center justify-center pointer-events-none pt-10 overflow-x-hidden">
          <Cube containerClass="-mt-60" />
        </div>
      </div>
    </section>
  );
}
