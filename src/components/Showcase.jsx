import React from "react";
import img from "../assets/img/showcase.png";

const Showcase = () => {
  return (
    <section className="container grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 lg:gap-0 items-center py-8 lg:py-0">
      <div className="flex flex-col justify-around items-start space-y-6 lg:space-y-0 order-2 lg:order-1 text-center lg:text-left">
        <h1 className="font-Inter font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#042352] w-full">
          Tech Heim
        </h1>
        <p className="text-xl my-3 lg:my-10 sm:text-2xl lg:text-[32px] font-Inter font-medium text-[#042352] w-full">
          "Join the <span className="text-[#f45e0c]">digital revolution</span>"
        </p>
        <button className="bg-[#f45e0c] font-Inter text-base font-normal text-center text-white rounded-lg py-3 px-8 mx-auto lg:mx-0 hover:bg-[#e0550a] transition-colors duration-200">
          Explore More
        </button>
      </div>
      <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
        <img
          src={img}
          alt="Tech Showcase"
          className="w-full max-w-md lg:max-w-full h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default Showcase;
