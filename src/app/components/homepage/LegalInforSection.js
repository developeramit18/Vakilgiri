"use client";
import Link from "next/link";
import SectionTitle from "../subComponents/SectionTitle";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});
export default function LegalInforSection() {
  return (
    <div className="max-w-[95%] mx-auto w-full">
      <div className="my-16 text-center w-full max-w-4xl ml-auto ">
        <SectionTitle
          heading={"VAKILGIRI LEGAL CONSULTANTS"}
          subHeading={"LET US HELP YOU BECOME AN ENTREPRENEUR"}
        />
        <p
          style={{ wordSpacing: "4px" }}
          className={`text-justify my-4 text-black leading-[1.2em] text-[15px] font-normal px-8 ${poppins.className}`}
        >
          Vakilgiri is one of the best online tax and legal consultant in India
          occupying around 12% of the Indian Market share. We, the team of
          Vakilgiri, consisting of Chartered accountants, Business Experts, IT
          Developers & Digital Marketers, work as a whole, thrives to provide
          all legal as well as IT/ Technical Consultancy under the same roof. We
          provide 360° solutions to start-ups and entrepreneurs by providing
          them guidance and support through various services such as Company
          Registration, Business and firm registration online, Online CA
          Services in India,{" "}
          <Link href={"/"} className="text-primary underline hover:text-black">
            GST Registration
          </Link>
          , Trademark Registration, Web-Site Development, Mobile App
          Development, Digital Marketing, etc. at very nominal prices. We
          believe in building relationships with our Clients by providing them
          the Best online Tax and legal Consultant in India, and it’s our
          Clients who trusted us and aided us in growing continuously.
        </p>
        <p
          style={{ wordSpacing: "6px" }}
          className="text-justify text-black leading-[1.2em] text-[15px] px-8 font-medium font-poppins "
        >
          We help Young Entrepreneurs by providing fast online new company
          registration in India, Online tax and Legal Consultant in India and by
          providing best CA for company registration. Our motto is “Time is
          Everything”, thus we are responsible for quick, cost effective and
          best{" "}
          <Link href={"/"} className="text-primary underline hover:text-black">
            online new company registration in India
          </Link>
          . Have faith and get started.
        </p>
      </div>
    </div>
  );
}
