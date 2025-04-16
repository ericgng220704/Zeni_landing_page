"use client";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import CTAButton from "./CTAButton";
import Link from "next/link";
import Logo from "./Logo";

const navItems = ["About", "Projects"];

export default function NavBar() {
  const navContainerRef = useRef<HTMLDivElement>(null);

  const { y: currentScrollY } = useWindowScroll();
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (!navContainerRef.current) return;

    if (currentScrollY === 0) {
      // Topmost position: show navbar without floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      // Scrolling down: hide navbar and apply floating-nav
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      // Scrolling up: show navbar with floating-nav
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-2 z-50 h-16 border-none transition-all duration-700"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between md:px-16 lg:px-24">
          {/* Logo and Product button */}
          <div className="flex size-full items-center justify-between text-black px-4 py-1.5 rounded-4xl bg-white">
            <div className="flex gap-8">
              <Logo Clsname="!text-3xl font-bold" />
              <div className="hidden md:flex mr-5  items-center gap-2 ">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className="nav-hover-btn text-black"
                  >
                    <CTAButton
                      title={item}
                      id={item + index}
                      containerClass="!bg-none !px-4 !text-base font-semibold !text-gray-600"
                    />
                  </Link>
                ))}
              </div>
            </div>

            {/* Navigation Links and Audio Button */}
            <div className="flex h-full">
              <CTAButton
                id="product-button"
                title="CONTACT ME"
                rightIcon={<TiLocationArrow />}
                containerClass="md:flex hidden justify-center items-center gap-1 border border-1 border-black/20 !text-sm !bg-brand-ice-blue text-"
              />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
