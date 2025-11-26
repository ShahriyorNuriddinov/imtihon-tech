import React from "react";
import icon1 from "../assets/svg/icon1.svg";
import icon2 from "../assets/svg/icon2.svg";
import icon3 from "../assets/svg/icon3.svg";
import icon4 from "../assets/svg/icon4.svg";

const Services = () => {
  const services = [
    {
      img: icon1,
      title: "Latest and Greatest Tech",
    },
    {
      img: icon2,
      title: "Guarantee",
    },
    {
      img: icon3,
      title: "Free Shipping over 1000$",
    },
    {
      img: icon4,
      title: "24/7 Support",
    },
  ];

  return (
    <section className="container">
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl">
          {services.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center justify-center gap-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 sm:gap-4 flex-col sm:flex-row text-center sm:text-left">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                  <p className="text-[#0c0c0c] font-light text-base sm:text-lg leading-[140%]">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
