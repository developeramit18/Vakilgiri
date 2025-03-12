"use client"
import { IoCall} from "react-icons/io5";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegFileAlt } from "react-icons/fa";
import Link from "next/link";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700','800', '900']
})

const Button = ({dataIcon, text, bg, link}) =>{
    return(
        <Link href={link ? link : '/'} className={`${text !== 'Enquire Now' ? 'hidden' : 'flex'}  px-3 py-1 w-full sm:flex items-center justify-center rounded-lg gap-1 text-white text-[14px] font-normal ${bg ? bg : 'bg-green-600'} ${poppins.className}`}>
                {dataIcon}
                <span>{text}</span>
            </Link>
    )
}

export default function FixedContactUsComponent() {
  return (
    <div className="w-full z-[15] max-w-md shadow-[0px_0px_5px_0px_#252121] rounded-t-lg p-2 fixed bottom-0 md:right-[2%] bg-white">
        <div className="flex items-center gap-[14px] justify-center pb-1">
          <button className="flex sm:hidden text-primary bg-white w-fit px-5 justify-center items-center">
          <IoCall className="text-2xl"/>
          </button>
            <Button text={'Call Now'} dataIcon={<IoCall/>} bg={'bg-secondary'} link={'tel:09528665852'} />
            <Button text={'Enquire Now'} dataIcon={<FaRegFileAlt/>} bg={'bg-primary'} link={'https://www.vakilgiri.com/#elementor-action%3Aaction%3Dpopup%3Aopen%26settings%3DeyJpZCI6IjEyMTMiLCJ0b2dnbGUiOmZhbHNlfQ%3D%3D'} />
            <Button text={'whatsApp'} dataIcon={<BsWhatsapp/>} link={'https://api.whatsapp.com/send?phone=919528665852'}/>
            <button className="flex sm:hidden text-primary bg-white w-fit px-5 justify-center items-center">
          <BsWhatsapp className="text-2xl"/>
          </button>
        </div>
    </div>
  )
}
