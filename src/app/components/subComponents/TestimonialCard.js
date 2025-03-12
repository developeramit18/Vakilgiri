import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard({bg}) {
  return (
    <div className="w-full rounded-lg border bg-white border-gray-200 ">
        <div className="flex flex-col">
            <div className="flex gap-3 p-4">
                <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src={'/Mukul-Garg.jpg'} alt='testimonial-1' width={64} height={64} className="h-full w-full object-cover" />
                </div>
                <div className="flex flex-col gap-1">
                    <strong className="text-[15px]">Er. Mukul Garg</strong>
                    <div className="flex">
                        <FaStar className="text-[#F0AD4E]"/>
                        <FaStar className="text-[#F0AD4E]"/>
                        <FaStar className="text-[#F0AD4E]"/>
                        <FaStar className="text-[#F0AD4E]"/>
                        <FaStar className="text-[#F0AD4E]"/>
                    </div>
                    <span className="text-gray-500 font-medium text-sm">Teach Advisors</span>
                </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200"></div>
            <div className="px-4 py-2 pb-6 text-gray-600">
                Vakilgiri is one of the India's top leading business consultancy firms.
            </div>
        </div>
    </div>
  )
}
