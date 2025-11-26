import React from "react";
import banner from "../assets/img/banner.png"
import img from "../assets/img/watch.png"

const Banner = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div
        style={{
          backgroundImage: `url('${banner}')`,
        }}
        className="min-h-[400px] md:h-[500px] rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 md:p-12 bg-cover bg-center bg-no-repeat"
      >
        <div className="text-center flex items-center flex-col md:text-left mb-8 md:mb-0 md:max-w-md">
          <h1 className="font-medium text-3xl md:text-[44px] text-white leading-tight mb-4">
            SMART WATCH
          </h1>
          <p className="font-light text-xl md:text-2xl text-white mb-6 md:mb-8">
            Various designs and brands
          </p>
          <button className="bg-[#ff6951] hover:bg-[#e55a44] transition-colors duration-300 rounded-lg font-medium text-base text-[#223949] px-6 py-3 md:px-8 md:py-4">
            View All
          </button>
        </div>
        <div className="flex justify-center md:justify-end">
          <img 
            src={img} 
            alt="" 
            className=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;