"use client";
import Image from "next/image";
import Link from "next/link";
import { HeaderLinks } from "../shared/HeaderLinks"; 
import { RiMenu2Fill } from "react-icons/ri";
import { useState } from "react";
import ResponsiveMenu from "../components/subComponents/ResponsiveMenu";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoveredSubIndex, setHoveredSubIndex] = useState(null);

  return (
    <div
      className={`"w-full bg-[#F5F5F5] px-5 xl:px-9 py-2 sticky top-0 left-0 z-20 shadow-md ${poppins.className} "`}
    >
      <div className="w-full flex items-center justify-between sticky">
        {/* Hamburger */}
        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="w-fit lg:hidden flex p-1 text-white bg-primary text-xl rounded-md"
        >
          <RiMenu2Fill />
        </button>

        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/logo.jpg"
            width={130}
            height={87}
            alt="logo"
            className="h-auto"
          />
        </Link>

        {/* Links */}
        <div className="lg:flex items-center gap-3 hidden">
          <ul className="flex items-center gap-4">
            {HeaderLinks &&
              HeaderLinks.length > 0 &&
              HeaderLinks.map((links, index) => (
                <div
                  key={links.id}
                  className="relative group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link
                    href={links.link ? links.link : "#"}
                    className="flex items-center py-2 gap-2 text-sm hover-primary transition-all duration-300"
                  >
                    <span>{links.title}</span>
                    {links.dropdownIcon && <links.dropdownIcon />}
                  </Link>

                  {/* Dropdown Menu */}
                  {links.dropdownLinks && links.dropdownLinks.length > 0 && (
                    <ul
                      className={`absolute w-fit left-0 bg-white rounded-md transition-opacity duration-200 shadow-[0px_0px_10px_0px_gray] ${
                        hoveredIndex === index
                          ? "opacity-100 visible"
                          : "opacity-0 invisible"
                      }`}
                    >
                      {links.dropdownLinks.map((subItem, index) => (
                        <div
                          key={subItem.id}
                          className="relative group"
                          onMouseEnter={() => setHoveredSubIndex(index)}
                          onMouseLeave={() => setHoveredSubIndex(null)}
                        >
                          <Link
                            href={subItem.link}
                            className={`flex items-center gap-2 text-nowrap font-medium py-[10px] px-8 text-[13px] hover:bg-[#00364F] hover:text-white ${index === 0 && 'rounded-t-md'} ${index === links.dropdownLinks.length - 1 && 'rounded-b-md'}`}
                          >
                            {subItem.title}
                            {subItem.dropdownIcon && <subItem.dropdownIcon />}
                          </Link>

                          {subItem.dropdownLinks &&
                            subItem.dropdownLinks.length > 0 && (
                              <ul
                                className={`absolute w-fit left-full top-0 bg-white rounded-md overflow-hidden transition-opacity duration-200 shadow-[0px_0px_10px_0px_gray] ${
                                  hoveredSubIndex === index
                                    ? "opacity-100 visible"
                                    : "opacity-0 invisible"
                                }`}
                              >
                                {subItem.dropdownLinks.map((data,index) => (
                                  <Link
                                    key={data.id}
                                    href={data.link}
                                    className="flex items-center gap-2 text-nowrap font-medium py-[10px] px-8 text-[13px] hover:bg-[#00364F] hover:text-white"
                                  >
                                    {data.title}
                                  </Link>
                                ))}
                              </ul>
                            )}
                        </div>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
          </ul>
          <Link
            href={"/"}
            className="bg-primary text-white text-sm px-[10px] py-1 font-normal rounded-md shadow-[0px_0px_2px_2px_#BEBEBE]"
          >
            Pay Now
          </Link>
        </div>
        <Link
          href={"/"}
          className=" lg:hidden flex bg-primary text-white text-sm px-[10px] py-1 font-normal rounded-md shadow-[0px_0px_2px_2px_#BEBEBE]"
        >
          Pay Now
        </Link>
      </div>
      {showMenu && (
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </div>
  );
}
