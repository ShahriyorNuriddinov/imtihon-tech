import React from "react";
import img1 from "../assets/svg/brand1.svg";
import img2 from "../assets/svg/brand2.svg";
import img3 from "../assets/svg/brand3.svg";
import img4 from "../assets/svg/brand4.svg";
import img5 from "../assets/svg/brand5.svg";
import img6 from "../assets/svg/brand6.svg";
const Brands = () => {
  const brands = [
    { img: img1, alt: "Brand 1" },
    { img: img2, alt: "Brand 2" },
    { img: img3, alt: "Brand 3" },
    { img: img4, alt: "Brand 4" },
    { img: img5, alt: "Brand 5" },
    { img: img6, alt: "Brand 6" },
  ];
  const allBrands = [...brands, ...brands, ...brands];
  return (
    <section className="container py-5">
      <div className="flex items-center justify-between py-3 border-b-2 border-solid my-7 border-b-[#b4b4b4]">
        <h2 className="font-Inter font-medium text-[32px] text-[#0c0c0c]">
          Top Brands
        </h2>
      </div>
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll">
          {allBrands.map((item, index) => (
            <div key={index} className=" px-4 md:px-6 lg:px-8">
              <div className="flex items-center justify-center w-24 md:w-32 h-16">
                <img src={item.img} className="" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-66.666%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          display: flex;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;
