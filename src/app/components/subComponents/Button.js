import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export default function ButtonSlider({text, link}){
    return (
        <Link href={link ? link : '/'} className={`" text-lg md:text-3xl bg-primary inline-block w-fit px-7 py-2 rounded-sm text-white font-bold mt-2 ${poppins.className}"`}>{text}</Link>
    )
}