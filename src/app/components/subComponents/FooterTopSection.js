import Link from "next/link";
import {
  FaAngleRight,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import FooterIcons from "./FooterIcons";
import { FooterLinks } from "@/app/shared/FooterLinks";

import {Poppins} from 'next/font/google';

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700','800', '900']
})

export default function FooterTopSection() {
  return (
    <div className="w-full sm:max-w-[92%] justify-between mx-auto flex lg:flex-row flex-col gap-4 text-white ">
      <div className="flex-1 flex justify-between flex-wrap px-4 sm:px-4 md:px-8 pr-12 gap-4">
        {FooterLinks &&
          FooterLinks.length > 0 &&
          FooterLinks.map((data, index) => (
            <div className="flex flex-col gap-6 " key={data.id}>
              <h3 className={`text-primary ${poppins.className} font-bold text-[15px] relative after:content-[''] after:inline after:w-[60px] after:h-[3px] after:bg-[#f50e00] after:absolute after:-bottom-[10px] after:left-0 after:rounded-sm uppercase`}>
                {data.title}:
              </h3>
              <ul className="flex flex-col gap-[6px] text-sm">
                {
                    data.links && data.links.map((subData) =>(
                        <Link
                        key={subData.id}
                  href={subData.link}
                  className={`flex items-center gap-3 font-normal text-[13px] hover-primary transition-all duration-300 ${poppins.className}`}
                >
                  <FaAngleRight className="text-primary" />
                  <span>{subData.title}</span>
                </Link>
                    ))
                }
              </ul>
            </div>
          ))}
      </div>
      <div className="w-full md:max-w-[250px] flex flex-col gap-6 px-2">
        {/* Form to subscribe */}
        <h3 className={`text-primary ${poppins.className} font-bold text-[15px] relative after:content-[''] after:inline after:w-[60px] after:h-[3px] after:bg-[#f50e00] after:absolute after:-bottom-[10px] after:left-0 after:rounded-sm `}>Subscribe to Blog:</h3>
        <form className="flex flex-col w-full gap-3">
          <input
            type="text"
            placeholder="Enter your Name..."
            className="border-1 border-white text-white text-sm font-medium focus:border-dotted focus:ring-0 outline-0 px-[10px] py-[6px] rounded-md"
          />
          <input
            type="email"
            placeholder="Enter your Email Id..."
            className="border-1 border-white text-white text-sm font-medium focus:border-dotted focus:ring-0 outline-0 px-[10px] py-[6px] rounded-md"
          />
          <button className="text-white border border-white py-2 px-3 w-full bg-primary text-sm rounded-md">
            Subscribe
          </button>
          <div className="flex gap-2">
            <FooterIcons icons={<FaFacebook />} />
            <FooterIcons icons={<FaInstagram />} />
            <FooterIcons icons={<FaTwitter />} />
            <FooterIcons icons={<FaLinkedin />} />
            <FooterIcons icons={<FaYoutube />} />
          </div>
        </form>
      </div>
    </div>
  );
}
