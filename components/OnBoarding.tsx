"use client";

import Image from "next/image";
import { Progress } from "@/components/ui/progress";
import { InView } from "./ui/in-view";

type OnboardingVisualStepsProps = {
  step: number;
  totalSteps?: number;
  // Include any additional props like a user if needed.
};

export default function OnboardingVisualSteps({
  step,
  totalSteps = 3,
}: OnboardingVisualStepsProps) {
  return (
    <InView
      viewOptions={{ once: true, margin: "0px 0px -250px 0px" }}
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.09,
          },
        },
      }}
    >
      {" "}
      <div className="min-w-[600px]">
        <div className="pb-4 flex flex-col justify-between">
          <div className="flex flex-col items-center justify-center">
            {/* Display progress bar */}
            <Progress value={(step / totalSteps) * 100} className="!h-[5px]" />

            {/* Title changes based on step */}
            <span className="text-center text-lg text-gray-700 font-semibold !my-4">
              {step === 1 && "Welcome to Zeni!"}
              {step === 2 && "Create your very first balance"}
              {step > 2 && "Start Exploring"}
            </span>

            {/* Visual content for each step */}
            <div>
              {step === 1 && (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-sm text-gray-600 max-w-[300px] text-left">
                    Quickly create your Zeni account with secure authentication
                    options, including <span className="font-bold">Google</span>{" "}
                    login. It’s fast, safe, and hassle-free.
                  </span>
                  <Image
                    src="/Zeni_Login_page.png"
                    className="mt-4 rounded-3xl"
                    alt="Zeni login page"
                    height={300}
                    width={300}
                  />
                  {/* <span className="text-xs text-gray-300">
              *Image from
              https://www.lummi.ai/3d/animated-cat-character-in-children's-attire-n04_n
            </span> */}
                </div>
              )}
              {step === 2 && (
                <div className="flex flex-col gap-4">
                  <span className="text-sm text-gray-600 max-w-[300px] text-left">
                    Easily create your initial balance to immediately start
                    tracking your finances.
                  </span>
                  <Image
                    src="/new_balance.png"
                    className="mt-4 rounded-3xl border-2 border/50"
                    alt="New Balance form"
                    height={300}
                    width={300}
                  />
                </div>
              )}
              {step === 3 && (
                <div className="flex flex-col gap-4">
                  <span className="text-sm text-gray-600 max-w-[300px] text-left">
                    Access Zeni’s powerful suite of features—from AI-driven
                    insights and personalized budgeting to advanced visual
                    analytics.
                  </span>
                  <Image
                    src="/Zeni_explore.png"
                    className="mt-4 rounded-3xl border-2 border/50"
                    alt="explore diagram"
                    height={300}
                    width={300}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </InView>
  );
}
