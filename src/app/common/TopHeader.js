"use-client"

import Link from "next/link";
import { IoCall} from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa"; 


export default function TopHeader() {
  return (
    <div className={`w-full flex justify-center items-center py-[8px] bg-secondary`}>
      <div className="w-full flex-1 flex justify-between items-center px-3 text-[13px] text-white">
        <ul className="lg:flex items-center text-white poppins gap-6 px-6 font-normal hidden">
          <li>
            <Link href={"/"}>About Us</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"/"}>Testimonials</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"} className="flex items-center gap-2">Partner with Us <FaCaretDown/></Link>
          </li>
        </ul>
        <ul className="flex w-full md:w-fit justify-center md:justify-end items-center gap-4 px-4 poppins text-white/95">
          <Link
            href={"tel:09528665852"}
            className="flex gap-2 items-center hover:text-[#f50e00] transition-all duration-300 "
          >
            <IoCall className="text-[#f50e00] text-lg" />
            <span>+91-9528665852</span>
          </Link>
          <Link href="mailto:sales@vakilgiri.com?subject=Query" className="flex gap-2 items-center hover:text-[#f50e00] transition-all duration-300">
          <IoMdMail className="text-primary text-lg" />
            <span>sales@vakilgiri.com</span>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
}
