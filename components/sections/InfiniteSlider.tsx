import { cn } from "@/lib/utils";
import { InfiniteSlider } from "../motion-primitives/infinite-slider";
import { IoIosLeaf } from "react-icons/io";

const techs = [
  "Intelligent",
  "Innovative",
  "Adaptive",
  "Intuitive",
  "Efficient",
  "Scalable",
  "Personalized",
  "Data-driven",
  "Robust",
  "Transformative",
];

export function InfiniteSliderSection() {
  return (
    <InfiniteSlider speed={75} speedOnHover={20} gap={32} className="mt-20">
      {techs.map((tech, index) => (
        <div
          className="flex gap-4 items-center text-3xl md:text-4xl lg:text-4xl text-gray-600 font-bold mb-4"
          key={index}
        >
          <IoIosLeaf className="text-brand-blue" />
          <span className={cn("text-gray-600 font-semibold")}>{tech}</span>
        </div>
      ))}
    </InfiniteSlider>
  );
}
