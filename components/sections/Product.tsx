"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "../ui/card";
import { ProgressiveBlur } from "../motion-primitives/progressive-blur";
import { DemoChart } from "../DemoChart";

export default function ProductSection() {
  return (
    <div className="md:px-16 lg:px-24 px-4 w-full bg-brand-black rounded-[4rem] min-h-[200dvh] pt-20 pb-36 ">
      <div>
        <span className="section-line !text-brand-ice-blue">FEATURES</span>
        <h2 className="h2 !text-brand-cream">What make us outstanding?</h2>
      </div>

      <div className="flex flex-col md:grid grid-cols-2 gap-8 my-8">
        <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 relative overflow-hidden rounded-4xl">
          <CardHeader className="!p-0 relative">
            <div className="size-full xl:min-h-[500px] md:min-h-[400px] flex flex-col justify-end items-start xl:p-20 lg:p-12 p-8">
              <div className="flex flex-col z-50">
                <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="38"
                    height="38"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      d="M5.5 1v1.5m-3 3H1m14 0h-1.5M2.5 8H1m14 0h-1.5m-11 2.5H1m14 0h-1.5m-8 3V15M8 1v1.5m0 11V15m2.5-14v1.5m0 11V15m2-12.5 1 1v9l-1 1h-9l-1-1v-9l1-1h9Z"
                    />
                    <path
                      fill="currentColor"
                      d="m8 4 .57 1.73a2.667 2.667 0 0 0 1.7 1.7L12 8l-1.73.57a2.667 2.667 0 0 0-1.7 1.7L8 12l-.57-1.73a2.667 2.667 0 0 0-1.7-1.7L4 8l1.73-.57a2.667 2.667 0 0 0 1.7-1.7L8 4Z"
                    />
                  </svg>
                </div>
                <h3 className="h3 !text-brand-cream mb-3">AI Agent</h3>
                <span className="text-lg lg:text-xl text-gray-200">
                  {/* Zeni's intelligent chatbot doesn't just answer your
                  questions—it proactively assists you, turning your simple
                  natural language commands into real actions within seconds.
                  Manage expenses, set budgets, and analyze your finances just
                  by asking. */}
                  Simply type your natural language commands, they will be
                  turned into real actions.
                </span>
              </div>
            </div>
            <Image
              src={"/bg-bottom-right.jpg"}
              alt="background top right corner"
              className="inset-0 object-cover size-full"
              fill
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 h-2/3 w-full"
              direction="bottom"
              blurIntensity={8}
            />
          </CardHeader>
        </Card>
        <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 relative overflow-hidden rounded-4xl">
          <CardHeader className="!p-0 relative">
            <div className="size-full xl:min-h-[500px] min-h-[400px] flex flex-col justify-end items-start xl:p-20 lg:p-12 p-8">
              <div className="flex flex-col z-50">
                <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      d="M2.5 11 12 1.5 14.5 4 5 13.5H2.5V11ZM9.5 4 12 6.5"
                    />
                    <path
                      fill="currentColor"
                      d="m4 1 .849 2.151L7 4l-2.151.849L4 7l-.849-2.151L1 4l2.151-.849L4 1ZM13 8l.566 1.434L15 10l-1.434.566L13 12l-.566-1.434L11 10l1.434-.566L13 8ZM10 11.5l.424 1.076L11.5 13l-1.076.424L10 14.5l-.424-1.076L8.5 13l1.076-.424L10 11.5Z"
                    />
                  </svg>
                </div>
                <h3 className="h3 !text-brand-cream mb-3">
                  Personalized Experience
                </h3>
                <span className="text-lg lg:text-xl text-gray-200">
                  Customize your profile, visual elements, and analyzer to align
                  perfectly with your financial goals and style.
                </span>
              </div>
            </div>
            <Image
              src={"/bg-bottom-left.jpg"}
              alt="background top right corner"
              className="inset-0 object-cover size-full"
              fill
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 h-2/3 w-full"
              direction="bottom"
              blurIntensity={8}
            />
          </CardHeader>
        </Card>
      </div>

      <div className="mt-40">
        <span className="section-line !text-brand-ice-blue">FEATURES</span>
        <h2 className="h2 !text-brand-cream">Why people Love Zeni</h2>
      </div>

      <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 mt-20 relative overflow-hidden rounded-4xl">
        <CardContent className="flex flex-col lg:grid lg:grid-cols-2 !p-0 relative">
          <div className="order-2 lg:order-1 size-full xl:min-h-[500px] [@media(min-width:600px)]:min-h-min  min-h-[400px] flex flex-col justify-end items-start xl:p-20 lg:p-12 p-8">
            <div className="flex flex-col z-50">
              <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    stroke="currentColor"
                    d="M8 2.5H1.5v12h12V8M4.5 8v4M7.5 6v6M10.5 9v3"
                  />
                  <path
                    fill="currentColor"
                    d="m12 1 .848 2.151L15 4l-2.152.849L12 7l-.848-2.151L9 4l2.152-.849L12 1Z"
                  />
                </svg>
              </div>
              <h3 className="h3 !text-brand-cream mb-3">
                Beautifully Visualized Data
              </h3>
              <span className="text-lg lg:text-xl text-gray-200">
                Understand your finances instantly with interactive, clear
                charts and visual summaries. Turn complex data into insights at
                a glance.
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2 [@media(max-width:600px)]:hidden flex items-center justify-center size-full relative lg:min-h-[450px] lg:pt-0 pt-8">
            <div className="max-h-2/3 flex items-center justify-center rounded-2xl overflow-hidden z-50">
              <DemoChart />
            </div>
          </div>
          <Image
            src="/bg-top-right.jpg"
            alt="background top right corner"
            fill
            className="inset-0 object-cover size-full"
          />
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 left-0 w-full h-0 lg:w-2/3 lg:h-full"
            direction="left"
            blurIntensity={8}
          />
        </CardContent>
      </Card>

      <div className="flex flex-col md:grid grid-cols-2 gap-8 my-8">
        <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 relative overflow-hidden rounded-4xl">
          <CardHeader className="!p-0 relative">
            <div className="size-full xl:min-h-[500px] min-h-[400px] flex flex-col justify-end items-start xl:p-20 lg:p-12 p-8">
              <div className="flex flex-col z-50">
                <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      d="M14.5 9V5.5h-13v9H9M1.5 5.5v-4h13v4h-13ZM3 3.5h1M5 3.5h1M7 3.5h1"
                    />
                    <path
                      fill="currentColor"
                      d="m12 8.5.99 2.51 2.51.99-2.51.99L12 15.5l-.99-2.51L8.5 12l2.51-.99L12 8.5ZM8 7l.566 1.434L10 9l-1.434.566L8 11l-.566-1.434L6 9l1.434-.566L8 7Z"
                    />
                  </svg>
                </div>
                <h3 className="h3 !text-brand-cream mb-3">
                  Modern & User-Friendly Interface
                </h3>
                <span className="text-lg lg:text-xl text-gray-200">
                  Enjoy financial management through a smooth, visually
                  appealing, and intuitive app experience. Zeni prioritizes
                  clarity and ease of use in every interaction.
                </span>
              </div>
            </div>
            <Image
              src={"/bg-bottom-right.jpg"}
              alt="background top right corner"
              className="inset-0 object-cover size-full"
              fill
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 h-2/3 w-full"
              direction="bottom"
              blurIntensity={8}
            />
          </CardHeader>
        </Card>
        <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 relative overflow-hidden rounded-4xl">
          <CardHeader className="!p-0 relative">
            <div className="size-full xl:min-h-[500px] min-h-[400px] flex flex-col justify-end items-start xl:p-20 lg:p-12 p-8">
              <div className="flex flex-col z-50">
                <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    fill="none"
                    viewBox="0 0 16 16"
                  >
                    <path
                      stroke="currentColor"
                      d="M13.5 1.5v1a4 4 0 0 1-4 4H8M10.5 6.5v.742a4 4 0 0 1-3.75 3.992L2.5 11.5"
                    />
                    <path
                      stroke="currentColor"
                      d="M2.5 15v-3.5c0-5.523 4.477-10 10-10H14"
                    />
                    <path
                      fill="currentColor"
                      d="m2.5 1 .424 1.076L4 2.5l-1.076.424L2.5 4l-.424-1.076L1 2.5l1.076-.424L2.5 1ZM11.5 10l.707 1.793L14 12.5l-1.793.707L11.5 15l-.707-1.793L9 12.5l1.793-.707L11.5 10ZM13.5 7l.424 1.076L15 8.5l-1.076.424L13.5 10l-.424-1.076L12 8.5l1.076-.424L13.5 7Z"
                    />
                  </svg>
                </div>
                <h3 className="h3 !text-brand-cream mb-3">Built With Care</h3>
                <span className="text-lg lg:text-xl text-gray-200">
                  Every feature in Zeni reflects our commitment to your feedback
                  and needs. We consistently listen, adapt, and enhance Zeni to
                  ensure your best experience possible.
                </span>
              </div>
            </div>
            <Image
              src={"/bg-bottom-left.jpg"}
              alt="background top right corner"
              className="inset-0 object-cover size-full"
              fill
            />
            <ProgressiveBlur
              className="pointer-events-none absolute bottom-0 h-2/3 w-full"
              direction="bottom"
              blurIntensity={8}
            />
          </CardHeader>
        </Card>
      </div>

      {/* <Card className="w-full bg-[#212529]/90 outline-none border-none !p-0 !py-0 mt-4 relative overflow-hidden rounded-4xl">
        <CardContent className="grid grid-cols-2 !p-0 relative">
          <div className="flex items-center justify-center size-full relative min-h-[450px]">
            <div className="max-w-1/2 max-h-2/3 flex items-center justify-center rounded-2xl overflow-hidden z-50">
              <Image
                src={"/chatbot_demo.gif"}
                className="size-full object-cover"
                alt="chatbot demo"
                height={500}
                width={500}
              />
            </div>
          </div>
          <div className="size-full flex flex-col justify-end items-start p-20 text-right">
            <div className="flex flex-col z-50">
              <div className="text-gray-800 font-bold flex items-center justify-center bg-brand-cream w-16 h-16 text-3xl mb-6 rounded-2xl self-end">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="none"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M1 1h11v8H3.707L1 11.707V1Z"
                    clipRule="evenodd"
                  />
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M4 10v3h8.293L15 15.707V5h-2v5H4Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="h3 !text-brand-cream mb-3">Text-to-speech</h3>
              <span className="text-xl text-gray-200">
                Simply type in your text and turn it into professional
                voiceovers in minutes.
              </span>
            </div>
          </div>
          <Image
            src={"/bg-bottom.jpg"}
            alt="background top right corner"
            className="inset-0 object-cover size-full"
            fill
          />
          <ProgressiveBlur
            className="pointer-events-none absolute bottom-0 right-0 h-full w-2/3"
            direction="right"
            blurIntensity={8}
          />
        </CardContent>
      </Card> */}
    </div>
  );
}
