import React from 'react'

export default function SectionTitle({heading, subHeading}) {
  return (
    <>
        <h1
        className=" text-2xl md:text-4xl my-2 font-extrabold nunito uppercase text-center tracking-[0.1px] text-[#f21300]"
        style={{ textShadow: "-1px 3px 3px rgba(0, 0, 0, 0.3)" }}
      >
        {heading}
      </h1>
      <h3 className="font-bold text-[16px] poppins text-center text-black leading-[1.2em] -mt-1">
      {subHeading}
      </h3>
    </>
  )
}
