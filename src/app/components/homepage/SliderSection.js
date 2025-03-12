import Image from "next/image";
import { Poppins } from "next/font/google";
import ButtonSlider from "../subComponents/Button";

const poppins = Poppins({
  subsets:['latin'],
  weight:['200','300','400','500','600','700']
})

export default function SliderSection() {
  return (
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mt-8">
        {/* Left Text Section */}
        <div className=" text-black w-full lg:w-1/2 text-left px-3 sm:pl-10 md:pl-[70px] flex flex-col gap-4">
          <h2 className={` text-[26px] md:text-[36px] lg:text-[46px] font-semibold leading-[1.1em] ${poppins.className}`}>
            Private Limited Company Registration
          </h2>
          <p className={`w-full font-Poppins ${poppins.className}`}>
            Get the company registration in the most simplest and fastest way
            with us. Be your own Boss in just 5-6 working days.
          </p>
          <ButtonSlider text={"@ Rs.5499*/-"} />
        </div>

        {/* Right Image Section */}
        <div className="w-full sm:w-1/3 md:w-1/2 flex justify-center md:justify-end">
          <Image
            src="https://cdn-dnjgn.nitrocdn.com/siKGUxXVQBEUOLdTFzEgRkpREATOrYrT/assets/images/optimized/rev-1b9e448/www.vakilgiri.com/wp-content/uploads/2022/11/Slider-4.png"
            alt="sidebar-image"
            width={500} // Set width explicitly
            height={300} // Set height explicitly
            className="w-[90%] h-auto rounded-lg"
          />
        </div>
      </div>
  );
}
