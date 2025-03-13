import Link from "next/link";
import React from "react";
import { FaLock, FaTelegramPlane } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

export default function ContactForm({
  width,
  border,
  shadow,
  paddingX,
  paddingY,
  sticky,
  img,
  title,
  boldSubtitle,
  subtitle,
}) {
  return (
    <div
      style={{ maxWidth: width, padding: paddingX, paddingY }}
      className={`w-full h-fit ${sticky && "sticky top-16"} ${
        shadow && "shadow-[0px_0px_6px_0px_gray]"
      } bg-white flex flex-col justify-center items-center rounded-md poppins ${
        border && "border-2 border-primary"
      }`}
    >
      {img && (
        <div className="w-[42%] flex justify-center items-center">
          <img src="/logo.jpg" alt="logo" className="object-cover" />
        </div>
      )}
      {title && (
        <h3
        className=" text-xl font-extrabold uppercase nunito text-center text-[#f21300]"
        style={{ textShadow: "-1px 3px 3px rgba(0, 0, 0, 0.3)" }}
      >
        {title}
      </h3>
      )}

        <h4 className="text-center poppins text-[15px] font-medium capitalize">
        Please Fill This Form To <strong>{boldSubtitle ? boldSubtitle : 'kick start'}</strong> {subtitle ? subtitle : "your journey with us"} 
      </h4>
      <form className="w-full my-2 space-y-1">
        <input
          placeholder="Enter Your Name"
          className="text-[15px] border border-gray-500 p-2 w-full"
        />
        <input
          placeholder="Enter Your Mobile Number"
          className="text-[15px] border border-gray-500 p-2 w-full"
        />
        <input
          placeholder="Enter Your Email"
          className="text-[15px] border border-gray-500 p-2 w-full"
        />
        <button className="w-full py-2 bg-primary font-semibold hover:scale-90 transition-all duration-300 text-white flex items-center justify-center gap-2">
          <FaTelegramPlane />
          <span>Consult Now</span>
        </button>
      </form>
      <h5 className="mt-3 font-medium text-[15px]">or call/ whatsapp at</h5>
      <Link
        href={"tel:9528665852"}
        className="flex items-center gap-2 hover-primary text-2xl my-[1px]"
      >
        <IoCall className="text-primary" />
        <span className="text-secondary font-bold">+91-9528665852</span>
      </Link>
      <div className="flex items-center gap-2 text-xs">
        <FaLock className="text-primary" />
        <span className="text-[10px] font-semibold">
          No Spam, No Sharing, 100% confidentiality
        </span>
      </div>
    </div>
  );
}
