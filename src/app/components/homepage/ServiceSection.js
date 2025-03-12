import Link from "next/link";
import ServiceCard from "./ServiceCard";
import { IoArrowForwardCircleSharp } from "react-icons/io5";
import SectionTitle from "../subComponents/SectionTitle";

export default function ServiceSection() {
  return (
    <div className="my-16 text-center w-full max-w-[95%] mx-auto">
      <SectionTitle heading={'SERVICES we offer'} subHeading={'OUR MOST POPULAR SERVICES'} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 my-8">
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
            <ServiceCard/>  
      </div>
      <Link href={'/'} className="flex items-center gap-2 w-fit mx-auto px-4 py-2 rounded-lg bg-primary text-md uppercase text-white my-2 mb-4 shadow-[4px_2px_8px_0px_gray] hover:scale-90 transition-all duration-500">
        <span>View all services</span>
        <IoArrowForwardCircleSharp/>
      </Link>
    </div>
  )
}
