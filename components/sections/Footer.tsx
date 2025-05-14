import { IoIosMail } from "react-icons/io";
import { FaDownload } from "react-icons/fa6";
import { FiArrowUpRight } from "react-icons/fi";

export default function Footer() {
  return (
    <div className="px-4 flex flex-col gap-6 ">
      <div className="w-full flex flex-col lg:grid lg:grid-cols-5">
        <div className="lg:col-span-3 flex flex-col gap-1 sm:ml-4 lg:ml-5">
          <span className="text-3xl text-gray-600">
            Crafting digital experiences that inspire,
          </span>
          <p className=" text-4xl font-medium">Let work together!</p>
          <div className="w-full h-16"></div>
        </div>
        <div className="sm:px-4 lg:px-0 lg:col-span-2 flex items-center sm:!grid sm:!grid-cols-2 gap-12 text-gray-700">
          <div className=" flex flex-col self-end gap-1">
            <a className="flex items-center gap-1" href="">
              <IoIosMail />
              <span>giahaonguyen2207@gmail.com</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FaDownload />
              <span>Resume</span>
            </a>
          </div>
          <div className="flex flex-col self-end gap-1">
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>LinkedIn</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>Github</span>
            </a>
            <a className="flex items-center gap-1" href="">
              <FiArrowUpRight />
              <span>Facebook</span>
            </a>
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
