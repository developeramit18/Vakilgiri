"use client";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export default function WhyChooseUsCard({icon, title, article}) {
  return (
    <div className={`w-full rounded-lg border bg-white border-red-500 hover:shadow-[0px_0px_15px_0px_gray] transition-all duration-300 py-6 px-2 pb-8 ${poppins.className} ${title === 'Best Customer Support' ? 'whitespace-pre-line' : 'whitespace-break-spaces'}`}>
        {icon}
        <h4 className='text-primary text-[14px] font-semibold mt-2'>{title}</h4>
        <p className='text-[12px] font-normal text-justify  mt-1'>{article}</p>
    </div>
  )
}
