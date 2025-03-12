import React from "react";
import ContactForm from "../../subComponents/ContactForm";
import PrivateLimitedRegInfo from "./PrivateLimitedRegInfo";

export default function StickySection() {
  return (
    <div className="w-full p-12 px-12 poppins flex relative">
      {/* Left Side: Full Width Content */}
      <div className="flex-1">
        {/* Private Limited Registration Information */}
        <PrivateLimitedRegInfo />

      </div>

      {/* Right Side: Sticky Contact Form */}
      <div className="w-[300px] flex-shrink-0">
        <ContactForm
          width={"300px"}
          border={true}
          paddingX={"8px"}
          paddingY={"16px"}
          sticky={true}
        />
      </div>
    </div>
  );
}
