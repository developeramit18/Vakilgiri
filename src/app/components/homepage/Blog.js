"use client"
import Link from "next/link";
import SectionTitle from "../subComponents/SectionTitle";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import Image from "next/image";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export default function Blog() {
  return (
    <div className="w-full max-w-[95%] mx-auto">
        <SectionTitle heading={'Blog'} subHeading={'Learn as much as you can'} />

        {/* Blog Content Section */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center gap-4 my-4">
            {/* Blog Left Section */}
            <div className="w-full md:max-w-xl rounded-md shadow-[0px_0px_4px_0px_gray] hover:shadow-[0px_0px_8px_0px_gray] transition-all duration-200 overflow-hidden group">
                <div className="w-full relative cursor-pointer">
                    <Image src={'/blog-post-1.jpg'} alt="blog-1" width={300} height={200} className="brightness-95  object-cover h-auto w-full" />
                    <div className="absolute top-0 left-0 bg-secondary rounded-md text-white z-10 text-sm px-2 py-[2px] ">Section 8 NGO</div>
                    <div className="absolute top-0 left-0 transition-all duration-300 w-full h-full bg-black/20 hidden group-hover:inline-block"></div>
                </div>
                <div className="p-4 flex flex-col ">
                    <h3 className={`text-lg font-semibold sm:font-extrabold text-secondary ${poppins.className}`}>Understanding 12A Registration for NGOs in India: A Comprehensive Guide</h3>
                    <p className="text-sm text-gray-600 font-Poppins">Understanding 12A Registration for NGOs in India: A Comprehensive Guide Introduction: Registration under Section 12A of the Income Tax Act, 1961, is a crucial step</p>
                    <Link href={'/'} className="text-primary text-[12px] uppercase font-semibold underline">Read More &gt;&gt; </Link>
                </div>
                <div className="h-[1px] w-full bg-gray-200"></div>
                <div className="text-gray-500 p-4 text-[13px] flex gap-2"><span>Vakilgiri</span> <span>•</span> <span>October 10, 2023</span></div>
            </div>
            {/* Blog Right Section */}
            <div className="w-full flex-1 md:max-w-2xl rounded-md">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-2 group ">
                        <div className="h-32 w-full sm:w-[28rem] rounded-lg overflow-hidden relative cursor-pointer">
                            <Image src={'/blog-post-2.jpg'} alt="blog-post" width={128} height={120} className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute top-0 left-0 bg-black/30 hidden group-hover:inline-block"></div>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                            <h3 className="font-extrabold text-secondary text-md sm:text-[18px] leading-[1.1em]">NGO Darshan Registraion for Section 8 NGO: A Comprensive Guide</h3>
                            <div className="flex gap-1 text-xs text-primary">
                            <span>Vakilgiri</span>  | 
                            <span>October 10, 2023</span>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-md">NGO Darpan Registration for Section 8 NGO: A Comprehensive Guide Introduction: NGO Darpan or NITI Aayog registration is a unique</p>
                        </div>
                    </div>
                    <div className="flex gap-2 group ">
                        <div className="h-32 w-full sm:w-[28rem] rounded-lg overflow-hidden relative cursor-pointer">
                            <Image src={'/blog-post-2.jpg'} alt="blog-post" width={128} height={120} className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute top-0 left-0 bg-black/30 hidden group-hover:inline-block"></div>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                            <h3 className="font-extrabold text-secondary text-md sm:text-[18px] leading-[1.1em]">NGO Darshan Registraion for Section 8 NGO: A Comprensive Guide</h3>
                            <div className="flex gap-1 text-xs text-primary">
                            <span>Vakilgiri</span>  | 
                            <span>October 10, 2023</span>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-md">NGO Darpan Registration for Section 8 NGO: A Comprehensive Guide Introduction: NGO Darpan or NITI Aayog registration is a unique</p>
                        </div>
                    </div>
                    <div className="flex gap-2 group ">
                        <div className="h-32 w-full sm:w-[28rem] rounded-lg overflow-hidden relative cursor-pointer">
                            <Image src={'/blog-post-2.jpg'} alt="blog-post" width={128} height={120} className="w-full h-full object-cover" />
                            <div className="w-full h-full absolute top-0 left-0 bg-black/30 hidden group-hover:inline-block"></div>
                        </div>
                        <div className="w-fit flex flex-col gap-1">
                            <h3 className="font-extrabold text-secondary text-md sm:text-[18px] leading-[1.1em]">NGO Darshan Registraion for Section 8 NGO: A Comprensive Guide</h3>
                            <div className="flex gap-1 text-xs text-primary">
                            <span>Vakilgiri</span>  | 
                            <span>October 10, 2023</span>
                            </div>
                            <p className="text-gray-600 text-sm sm:text-md">NGO Darpan Registration for Section 8 NGO: A Comprehensive Guide Introduction: NGO Darpan or NITI Aayog registration is a unique</p>
                        </div>
                    </div>
                    <Link href={'/'} className="flex items-center lg:mx-0 mx-auto gap-2 w-fit  px-4 py-2 rounded-lg bg-primary text-md uppercase text-white my-2 mb-4 shadow-[4px_2px_8px_0px_gray] hover:scale-90 transition-all duration-500">
        <span>View all services</span>
        <IoArrowForwardCircleSharp/>
      </Link>
                    
                </div>
            </div>
        </div>
        
    </div>
  )
}
