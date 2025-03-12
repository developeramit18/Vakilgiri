import React from "react";
import { FaDotCircle, FaTelegramPlane } from "react-icons/fa";
import SecondaryButton from "./SecondaryButton";
import { IoCall } from "react-icons/io5";

export default function DocumentRequiredInfo() {
  return (
    <div className="w-full min-h-screen poppins">
      <div className="w-full max-w-[910px] px-4 py-8 text-center">
        <h2 className="text-3xl font-bold pt-4 whitespace-pre">
          Documents Required for <br /> Startup Company Registration
        </h2>
        <h4 className="font-semibold capitalize">
          This is all we need from you
        </h4>
        <h5 className="text-primary text-left font-semibold">
          For successful completion of Startup Company Registration, following
          are the documents required for the same:
        </h5>
        <ul className="text-md my-1 space-y-2">
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>PAN Card or Passport (Foreign Nationals & NRIs)</span>
          </li>
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>
              Copy of Aadhaar Card/ Voter’s ID/ Passport/ Driving License
            </span>
          </li>
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>Passport-sized Photograh</span>
          </li>
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>Mobile Number and Email Ids of all parties.</span>
          </li>
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>
              Latest bank statement (2 months)/ telephone or mobile bill/
              electricity or gas bill
            </span>
          </li>
          <li className="flex items-center gap-2 hover-primary">
            <FaDotCircle className="text-primary text-xs" />
            <span>Electricity Bill for Registered Office.</span>
          </li>
        </ul>

        <div className="shadow-[0px_0px_6px_0px_gray] rounded-xl my-8 flex overflow-hidden">
          <div className="flex w-1/2 justify-center items-center flex-col bg-secondary text-white p-8">
            <h2 className="text-2xl font-semibold">
              Check Company Name Availability
            </h2>
            <h4>Our systems will check availability of your Company Name</h4>
          </div>
          <form className="w-1/2 py-2 px-4 my-2 space-y-1">
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
              <span>Check Company name</span>
            </button>
          </form>
        </div>
          <div className="flex justify-center items-center">
            <SecondaryButton icon={<IoCall className="text-xl" />} text={'Talk to Our Expert'} />
          </div>
      </div>
    </div>
  );
}
