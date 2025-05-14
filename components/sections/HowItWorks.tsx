"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OnboardingVisualSteps from "../OnBoarding";
import Image from "next/image";
import { useState } from "react";

export default function HowItWorksSection() {
  const [step, setStep] = useState(1);

  return (
    <section
      id="getting started"
      className="px-4 md:px-16 lg:px-24 w-full min-h-dvh mt-32 !overflow-y-hidden flex flex-col items-center text-center"
    >
      <div className="flex flex-col col-span-1">
        <span className="section-line">How Zeni Works</span>
        <h2 className="h2">Getting started with Zeni is as easy as 1-2-3</h2>
        <Tabs defaultValue="1" className="text-wrap !text-left">
          <TabsList className="h-16 p-3 rounded-4xl !bg-none border border-black/10 self-center">
            <TabsTrigger
              value="1"
              className="!bg-none text-base font-normal relative cursor-pointer group"
              onClick={() => setStep(1)}
            >
              <span className="relative inline-flex overflow-hidden font-general">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Sign Up
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Sign Up
                </div>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="2"
              className="!bg-none text-base font-normal relative cursor-pointer group"
              onClick={() => setStep(2)}
            >
              <span className="relative inline-flex overflow-hidden font-general">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Create Balance
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Create Balance
                </div>
              </span>
            </TabsTrigger>
            <TabsTrigger
              value="3"
              className="!bg-none text-base font-normal relative cursor-pointer group"
              onClick={() => setStep(3)}
            >
              <span className="relative inline-flex overflow-hidden font-general">
                <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                  Explore
                </div>
                <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  Explore
                </div>
              </span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div className="relative flex items-center justify-center p-16 max-h-[600px] mt-6 ">
        <div className="rounded-3xl overflow-hidden pointer-events-none -z-20">
          <Image
            fill
            src={"/bg.jpg"}
            alt="background"
            className="rounded-3xl"
          />
        </div>
        <div className="bg-white rounded-2xl p-4">
          <OnboardingVisualSteps step={step} />
        </div>
      </div>
    </section>
  );
}
