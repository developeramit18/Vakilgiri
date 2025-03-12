import Link from "next/link";
import FooterTopSection from "../components/subComponents/FooterTopSection";

export default function Footer() {
  return (
    <div className="border-t-3 border-red-500 bg-secondary py-8 pb-10">
        <FooterTopSection/>

        <div className="w-full sm:max-w-[84%] mx-auto h-[1px] bg-primary my-12 mb-2"></div>
        <p className="text-white text-[13px] mb-0 leading-[1.9em] text-center w-full sm:max-w-[80%] mx-auto sm:px-0 px-2">
        By continuing past this page, you agree to our <Link href={'/'} className="text-primary font-semibold">Disclaimer Policy</Link>, <Link href={'/'} className="text-primary font-semibold">Privacy Policy</Link>, <Link href={'/'} className="text-primary font-semibold">Confidential Policy</Link> and <Link href={'/'} className="text-primary font-semibold">Satisfaction Policies</Link>. © 2024 – Vakilgiri Legtech (India) Private Limited. All rights reserved.
        </p>
        <p className="text-white text-[13px] mb-2 leading-[1.9em] text-center w-full sm:max-w-[80%] mx-auto sm:px-0 px-2">
        <strong>Disclaimer</strong>- Vakilgiri Legtech in India provides a user-friendly platform enabling access to reliable professionals for any legal work. We are not a law firm, hence do not provide legal services ourselves. The information provided on vakilgiri.com is for the purpose of knowledge only and should not be taken upon as legal advice.
        </p>

    </div>
  )
}
