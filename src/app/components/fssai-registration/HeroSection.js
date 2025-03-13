import Link from "next/link";
import ContactForm from "../subComponents/ContactForm";
import { FaArrowCircleRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[84vh] flex">
      {/* Left Section */}
      <div className="w-[42%] h-full flex flex-col justify-center gap-5 pl-10 poppins">
        <h3 className="text-md capitalize text-primary font-medium">
          If you are a businessperson who wants to trade in food sector, then
          having a FSSAI licence is a must!!
        </h3>
        <div>
          <h1 className="text-[45px] nunito font-extrabold text-black/90 leading-[1em]">
            FSSAI REGISTRATION
          </h1>
          <h2
            className=" text-[60px] my-2 font-bold nunito uppercase tracking-[0.1px] leading-[1.2em] text-primary"
            style={{ textShadow: "-1px 3px 3px rgba(0, 0, 0, 0.3)" }}
          >
            @1999/-
          </h2>
        </div>
        <p className="font-normal pr-4 italic">
          FSSAI stands for Food Safety & Standard Authority of India, an
          autonomous body which was established under Ministry of Health &
          Family Welfare, GOI. The main objective of FSSAI is to protect and
          promote public health.
        </p>
        <Link href={'/'} className=" w-fit capitalize font-medium text-lg px-7 py-2 rounded-r-full bg-primary text-white shadow-[0px_0px_5px_0px_rgba(0,0,0,0.5)] flex items-center gap-2 rounded-tl-md overflow-hidden">
            <span>Read about FSSAI registration</span>
        <FaArrowCircleRight/>
        </Link>
      </div>
      {/* contact form */}
      <div className="absolute top-1/2 left-[42%] z-10 -translate-y-1/2">
        <ContactForm
          width={"338px"}
          shadow={true}
          paddingX={"16px"}
          paddingY={"16px"}
          border={true}
          title={'GET QUOTATION'}
          subtitle={'FSSAI Registration Process'}
        />
      </div>
    </section>
  );
}
