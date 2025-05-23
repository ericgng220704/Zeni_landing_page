"use client";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import CTAButton from "./CTAButton";
import Link from "next/link";
import Logo from "./Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { IoMenu } from "react-icons/io5";

const navItems = ["About", "Features", "Getting started"];

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
        <nav className="flex size-full items-center justify-between px-16 lg:px-24">
          {/* Logo and Product button */}
          <div className="flex size-full items-center justify-between text-black px-4 py-1.5 rounded-4xl bg-white">
            <div className="flex [@media(max-width:400px)]:justify-between [@media(max-width:400px)]:w-full gap-2 md:gap-8">
              <Logo Clsname="!text-3xl font-bold" />
              <NavigationMenu className="block md:hidden hover:bg-white">
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger>
                      {" "}
                      <IoMenu className="w-4 h-4" />
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="w-max">
                      {navItems.map((item, i) => (
                        <NavigationMenuLink
                          key={`small nav ${i} + ${item}`}
                          className=" cursor-pointer"
                          asChild
                        >
                          <Link
                            href={`#${item.toLowerCase()}`}
                            className=" text-black"
                          >
                            <CTAButton
                              title={item}
                              id={item + i}
                              containerClass="!bg-none !px-1 !text-xm !py-1  font-semibold !text-gray-600"
                            />
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <div className="hidden md:flex mr-5 items-center gap-0 lg:gap-2 md:gap-1">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={`#${item.toLowerCase()}`}
                    className=" text-black"
                  >
                    <CTAButton
                      title={item}
                      id={item + index}
                      containerClass="!bg-none !px-4 !text-base md:!text-base  font-semibold !text-gray-600"
                    />
                  </Link>
                ))}
              </div>
            </div>

            <CTAButton
              id="product-button"
              title="Try it now"
              href="https://zeni-ericgng.vercel.app/"
              rightIcon={<TiLocationArrow />}
              containerClass="[@media(max-width:400px)]:hidden flex justify-center items-center gap-1 border border-1 border-black/20 !text-sm !bg-brand-ice-blue text-"
            />
          </div>
        </nav>
      </header>
    </div>
  );
}
