import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";
import CTAButton from "@/components/CTAButton";

export default function Footer() {
  return (
    <div className="px-4 flex flex-col gap-6">
      <div className="w-full flex flex-col lg:grid lg:grid-cols-5">
        <div className="lg:col-span-3 flex flex-col gap-1 sm:ml-4 lg:ml-5">
          <span className="text-3xl text-gray-600">
            Crafting digital experiences that inspire,
          </span>
          <p className="text-4xl font-medium">Let’s work together!</p>
          <div className="w-full h-16" />
        </div>

        <div className="sm:px-4 lg:px-0 lg:col-span-2 flex items-center sm:grid sm:grid-cols-2 gap-12 text-gray-700">
          <div className="flex flex-col self-end gap-1">
            <CTAButton
              id="email"
              title="giahaonguyen2207@gmail.com"
              leftIcon={<IoIosMail />}
              href="mailto:giahaonguyen2207@gmail.com"
              containerClass="flex items-center gap-1 !bg-none !px-0 !py-0 font-normal text-gray-700"
            />
          </div>

          <div className="flex flex-col self-end gap-1">
            <CTAButton
              id="linkedin"
              title="LinkedIn"
              leftIcon={<FiArrowUpRight />}
              href="https://www.linkedin.com/in/eric-nguyen-953740261/"
              newTab
              containerClass="flex items-center gap-1 !bg-none !px-0 !py-0 font-normal text-gray-700"
            />
            <CTAButton
              id="github"
              title="GitHub"
              leftIcon={<FiArrowUpRight />}
              href="https://github.com/ericgng220704"
              newTab
              containerClass="flex items-center gap-1 !bg-none !px-0 !py-0 font-normal text-gray-700"
            />
            <CTAButton
              id="facebook"
              title="Facebook"
              leftIcon={<FiArrowUpRight />}
              href="https://www.facebook.com/nguyengiahaoo"
              newTab
              containerClass="flex items-center gap-1 !bg-none !px-0 !py-0 font-normal text-gray-700"
            />
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2000 400"
          className="w-full h-auto"
        >
          <text
            x="50%"
            y="50%"
            fill="rgba(0,0,0,0.9)"
            fontFamily="sans-serif"
            fontSize="350"
            fontWeight="800"
            letterSpacing="20"
            textAnchor="middle"
            dominantBaseline="middle"
          >
            ERIC.GNG
          </text>
        </svg>
      </div>
    </div>
  );
}
