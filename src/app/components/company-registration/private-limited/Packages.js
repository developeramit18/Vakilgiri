import React from "react";
import { FaRegCheckSquare } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

export default function Packages({ shadow, center, data }) {
  return (
    <div
      className={`w-full min-w-sm h-full ${
        center && "relative -top-1 z-10 h-[calc(fit+100px)] "
      } ${
        shadow &&
        "shadow-[8px_0_10px_rgba(0,0,0,0.2),-8px_0_10px_rgba(0,0,0,0.2)] hover:shadow-[13px_0_20px_rgba(0,0,0,0.2),-13px_0_20px_rgba(0,0,0,0.2)] transition-all duration-300"
      } bg-white rounded-xl relative flex flex-col justify-between gap-4 overflow-hidden`}
    >
      <h2 className="nunito font-extrabold text-[32px] uppercase text-primary text-center my-6">
        {data.title}
      </h2>
      <div className="flex flex-col justify-between poppins bg-[#f9fafa] flex-1 pb-6">
        <div>
          {/* ---Package Price & discount price--- */}
          <div className="flex items-center justify-center gap-2">
            <div className="line-through flex items-end gap-1 text-black text-[17px] font-medium">
              <span>
                <span className="text-primary">₹</span>
                {data.price}{" "}
              </span>
            </div>
            <h2 className="text-primary poppins text-5xl font-semibold flex gap-1">
              <span className="text-2xl items-start">₹</span>
              {data.discountPrice}/-
            </h2>
          </div>
          <h3 className="text-secondary text-center font-semibold text-md">
            (+ Govt Fees)
          </h3>
        </div>
        <div className="flex my-8 w-full items-start flex-col gap-2 text-black px-7 opacity-80">
          {data.points.length > 0 &&
            data.points.map((point, index) => (
              <div
                className="flex items-center w-full font-medium gap-3 tracking-[.1px] text-[15px]"
                key={point.id + index}
              >
                {point.check ? (
                  <FaRegCheckSquare className="text-green-600 text-xl opacity-85" />
                ) : (
                  <RxCross2 className="text-primary text-xl" />
                )}
                <p>{point.title}</p>
              </div>
            ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="text-md text-white bg-primary font-semibold rounded-lg px-3 py-1 uppercase">
            This is Perfect for me
          </button>
        </div>
      </div>
      <div
        style={{ background: data.ribbonColor }}
        className="w-full absolute top-6 -right-40 rotate-45 uppercase text-white font-medium text-sm flex items-center justify-center p-1"
      >
        {data.ribbon}
      </div>
    </div>
  );
}
