import React from "react";
import { MdNavigateNext } from "react-icons/md";
import img from "../assets/img/blog.png";
import img2 from "../assets/img/blog2.png";
import { FaRegSave } from "react-icons/fa";
import img3 from "../assets/img/blog3.png";
import { MdOutlineDateRange } from "react-icons/md";
import { CiStopwatch } from "react-icons/ci";

const Ourblog = () => {
  return (
    <section className="container">
      <div className="flex items-center justify-between py-3 border-b-2 border-solid border-b-[#b4b4b4]">
        <h2 className="font-Inter font-medium text-[32px] text-[#0c0c0c]">
          Our Blogs
        </h2>
        <p className="font-Inter flex items-center font-light text-base text-[#0c0c0c]">
          View all <MdNavigateNext />
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-4 mt-4 my-5">
        <div
          className="bg-white rounded-lg col-span-1 lg:row-span-2"
          style={{
            boxShadow: "-2px 2px 20px -1px rgba(113, 113, 113, 0.2)",
          }}
        >
          <div>
            <img className="rounded-t-lg w-full h-[200px] object-cover" src={img} alt="Meta Platforms software announcement" />
          </div>
          <div className="px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-1">
                <MdOutlineDateRange className="text-[#9e9e9e]" />
                <p className="font-Inter font-light text-xs text-[#9e9e9e]">
                  August 8, 2023
                </p>
              </div>
              <div className="flex items-center gap-1">
                <CiStopwatch className="text-[#717171]" />
                <p className="font-Inter font-light text-xs text-[#717171]">
                  3 min read
                </p>
              </div>
            </div>
            <h3 className="font-medium text-xl text-[#0c0c0c] mb-2">
              Meta Platforms plans to release free software that...
            </h3>
            <p className="font-light text-base leading-[150%] text-[#0c0c0c]">
              The parent company of Facebook, Meta Platforms, is introducing
              software to help developers
            </p>
          </div>
        </div>

        <div
          className="bg-white rounded-lg"
          style={{
            boxShadow: "-2px 2px 20px -1px rgba(113, 113, 113, 0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[35%]">
              <img className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" src={img2} alt="Headphones facts" />
            </div>
            <div className="px-4 py-4 sm:w-[65%]">
              <h2 className="font-medium text-base text-[#f45e0c] mb-2">
                8 Things You Probably Didn't Know About Headphones
              </h2>
              <p className="text-sm mb-3 font-light text-[#717171] line-clamp-3">
                Owning a headphone could mean a different thing for different
                people. For some, it act as a fashion statement. It's easy to
                spot these people, the headphone are almost always just hanging
                around the neck.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <MdOutlineDateRange className="text-[#9e9e9e]" />
                  <p className="font-Inter font-light text-xs text-[#9e9e9e]">
                    August 8, 2023
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegSave className="text-orange-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="bg-white rounded-lg"
          style={{
            boxShadow: "-2px 2px 20px -1px rgba(113, 113, 113, 0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row">
            <div className="sm:w-[35%]">
              <img className="w-full h-full object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-tr-none" src={img3} alt="Bitcoin price analysis" />
            </div>
            <div className="px-4 py-4 sm:w-[65%]">
              <h2 className="font-medium text-base text-[#0c0c0c] mb-2">
                Analyzing the August 17th Bitcoin Price Drop
              </h2>
              <p className="text-sm mb-3 font-light text-[#717171] line-clamp-3">
                On August 17th at 9:30PM UTC, Bitcoin's price dropped more than 8% in a 10-minute window, to a two-month low of under $26k. This pulled
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <MdOutlineDateRange className="text-[#9e9e9e]" />
                  <p className="font-Inter font-light text-xs text-[#9e9e9e]">
                    August 17, 2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ourblog;