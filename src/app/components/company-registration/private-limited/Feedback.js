
import SecondaryButton from './SecondaryButton'
import { IoCall } from 'react-icons/io5'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
import TestimonialCard from '../../subComponents/TestimonialCard';
const testimonials = new Array(16).fill(null);


export default function  Feedback() {

  return (
    <div className='w-full min-h-screen bg-[#EEEEEE] poppins'>
      <div className='w-full max-w-[910px] text-black px-4 py-8 text-center'>
        <h2 className='text-3xl font-semibold pt-4'>Company Registration Procedure</h2>
        <h4>Steps to register Private Limited Company</h4>

        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={16}
          pagination={{
            dynamicBullets:true,
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          className="my-4 my-swiper"
          style={{ paddingBottom: "50px" }}
        >
          {testimonials &&
            testimonials.length > 0 &&
            testimonials.map((_, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard />
              </SwiperSlide>
            ))}
        </Swiper>


        <div className='flex justify-center items-center my-6'>
          <SecondaryButton icon={<IoCall className='text-xl' /> } text={'Talk to Our Expert'} />
        </div>
      </div>
    </div>
  )
}
