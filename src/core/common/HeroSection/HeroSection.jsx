import Image from "next/image";
import "./heroseciton.css";

export default function HeroSection({ title1, title2, subHeading }) {
  return (
    <div className="w-full h-auto flex flex-col  z-1">
      <div className="w-full flex justify-start ">
        <div className="topLeft rotate-300"></div>
      </div>

      <div>
        <div className="w-full h-full flex flex-col justify-center items-center">
          <h1 className="text-7xl font-bold">{title1}</h1>
          <h1 className="text-7xl font-bold">{title2}</h1>
          <h3 className="text-2xl">{subHeading}</h3>
        </div>
      </div>
      <div className="w-full flex justify-end">
        <div className="topRight"></div>
      </div>
    </div>
  );
}
