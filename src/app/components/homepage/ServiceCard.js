import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})


export default function ServiceCard() {
  return (
    <div className="w-full rounded-lg shadow-[0px_0px_4px_0px_black] overflow-hidden text-center">
      <div className="flex flex-col w-full gap-[2px]">
        <Image
          src="/service-section2.jpg"
          alt="service-image"
          width={300}
          height={200}
          className="w-full h-auto"
        />
        <Link href={'/'} className={`text-primary font-semibold underline uppercase text-sm sm:text-md ${poppins.className}`}>Private Limited Registration</Link>
        <h3 className="text-xs text-black/90 p-1">Get 2 DSCs, 2 DINs, COI, PAN, TAN, MOA, AOA, ESIC, ISO & MSME in just 7 days</h3>
        <Link href={'/'} className="w-fit mx-auto px-4 py-1 sm:py-2 rounded-lg bg-primary text-sm text-white my-1 mb-4">Starts @Rs.5499/-</Link>
      </div>
    </div>
  );
}
