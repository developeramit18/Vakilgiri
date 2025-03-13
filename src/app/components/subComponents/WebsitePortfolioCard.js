"use-client"

import Link from "next/link"
import { FaGlobe } from "react-icons/fa"

export default function WebsitePortfolioCard({data}) {
  return (
    <div className="w-full mb-4">
      <div className="w-full flex flex-col justify-center items-center ">
        <div className="w-full rounded-lg shadow-[0px_0px_5px_0px_rgba(0,0,0,0.5)] overflow-hidden">
          <img src={data.imageUrl} alt={data.title} className="w-full h-auto object-cover" />
        </div>
        <h3 className="uppercase font-semibold text-[16px] poppins my-2">{data.title}</h3>
        <Link href={data.link ? data.link : '/'} target="_blank" className="w-fit bg-primary text-white text-xs rounded-[5px] px-5 py-[8px] uppercase shadow-[0px_0px_5px_0px_rgba(0,0,0,0.5)] flex items-center gap-1 hover:scale-90 hover-bg-secondary transition-all duration-300">
          <FaGlobe className="text-sm"/>
          <span className="font-medium tracking-wider">View Website</span>
        </Link>
      </div>
    </div>
  )
}
