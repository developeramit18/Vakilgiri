"use client"

import Link from "next/link"
import Packages from "./Packages"
import { packageData } from "@/app/shared/PackageData"

export default function PackagesSection() {
  return (
    <div className="w-full min-h-screen bg-secondary p-14 flex flex-col justify-center items-center text-white poppins">
        <h2 className="text-3xl font-bold">Our Incredible Packages</h2>
        <h5 className="font-semibold capitalize">Irresistible Pocket friendly Packages</h5>

        <div className="flex justify-center items-center my-4 mt-8 gap-0">
            {
                packageData.length > 0 && packageData.map((data, index)=>(
                    <Packages data={data} key={data.id} shadow={index === 1 ? true : false} center={index===1 ? true : false}  />
                ))  
            }
        </div>

        <Link href="/" className="flex  gap-2 my-2">
            <span className="text-primary flex justify-center items-center">⁎</span>
            <span className="text-xs flex justify-center items-center">Prices may vary according to the stamp duty of different states. <b className="underline">Check Government Fees*</b></span>
        </Link>
    </div>
  )
}
