import { HeaderLinks } from "@/app/shared/HeaderLinks";
import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export default function ResponsiveMenu({ showMenu, setShowMenu }) {
  return (
    <div
      className={`fixed bg-black/20 top-0 left-0 bottom-0 right-0 z-30 transform ${
        showMenu ? "translate-x-0" : "-translate-x-full"
      } transition-transform lg:translate-x-0 `}
    >
      <div
        className={`w-full max-w-xs z-[20] h-screen bg-white shadow-[rgba(128,128,128,0.65)_2px_0px_2px_0px] fixed inset-y-0 left-0 transform ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        } transition-transform lg:translate-x-0
overflow-y-auto stylishScrollbar z-40`}
      >
        <div className="p-4 relative">
          <div className="flex justify-center items-center p-2">
            <Image
              src={"/logo.jpg"}
              width={120}
              height={70}
              className="h-auto"
              alt="logo"
            />
          </div>
          <button
            onClick={() => setShowMenu((prev) => !prev)}
            className="text-primary absolute top-4 right-4"
          >
            <RxCross1 strokeWidth={3} />
          </button>
          <div className="flex flex-col gap-4 my-2">
            <div className="flex flex-col gap-2">
              {HeaderLinks &&
                HeaderLinks.length > 0 &&
                HeaderLinks.map((data) => (
                  <div key={data.id} className="flex flex-col gap-2">
                    <h3
                      className={`text-primary text-lg font-semibold tracking-wider uppercase ${poppins.className}`}
                    >
                      {data.title}
                    </h3>
                    {data.dropdownLinks &&
                      data.dropdownLinks.map((subdata) => (
                        <div
                          className="flex gap-2 hover-primary items-center font-medium text-[15px]"
                          key={subdata.id}
                        >
                          <FaArrowRight className="text-primary" />
                          <Link href={subdata.link ? subdata.link : "/"}>
                            {subdata.title}
                          </Link>
                        </div>
                      ))}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
