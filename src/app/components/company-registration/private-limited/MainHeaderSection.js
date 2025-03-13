import { FaDotCircle } from "react-icons/fa";
import ContactForm from "../../subComponents/ContactForm";
import Link from "next/link";

export default function HeroSection() {
    return (
      <section className="relative w-full h-[84vh] bg-secondary flex">
        <img src="https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2022/06/bg-image.avif" className="absolute -top-[190px] -left-[188px] z-1 w-[46%] opacity-10" />
        {/* Left Section */}
        <div className="w-full h-full flex flex-col justify-center gap-1 px-8 text-white poppins">
            <h3 className="text-[26px] font-medium">Register your </h3>
            <h1 className="text-5xl font-semibold text-primary w-[80%] tracking-wider">Private Limited Company</h1>
            <h2 className="text-[25px] font-medium text-white">with our Expert Guidance</h2>
            <ul className="text-sm my-1 italic space-y-2">
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>Registration within 7 days</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>100% Online Process | No Office visit required</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>Get COI+PAN+TAN+MOA+AOA+ESIC+2 DSCs</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>Authorized Capital upto 15 lakhs</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>Free Udyam/ MSME Certificate</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaDotCircle className="text-primary"/>
                    <span>Free ISO 9001:2015 Certification</span>
                </li>
            </ul>
            <div className="flex items-center gap-3 mt-2">
            <img src="https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2024/08/Vakilgiri-Google-Reviews-1.webp" className="w-44 object-cover" />
            <Link href={'/'} className="px-7 py-2 bg-primary text-lg font-medium shadow-[0px_0px_4px_0px_#111] text-white hover:scale-95 transition-all duration-300 rounded-sm">View Packages</Link>
            </div>
        </div>
        {/* contact form */}
        <div className="absolute top-1/2 left-[40%] z-10 -translate-y-1/2">

            <ContactForm width={'350px'} shadow={true} paddingX={'16px'} paddingY={'16px'} title={'Talk to advisor'} img={true}/>
        </div>
        {/* Right section */}
        <div className="w-full max-w-xl h-full">
            <div className="w-full h-full">
            <img src="https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2023/02/sole_properitership_registration-transformed.webp" alt="hero-image" className="w-full h-auto bg-cover" />
            </div>
        </div>
      </section>
    );
  }
  