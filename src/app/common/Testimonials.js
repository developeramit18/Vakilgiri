"use client";

import SectionTitle from "../components/subComponents/SectionTitle"; 
import TestimonialCard from "../components/subComponents/TestimonialCard"; 
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Pagination, Autoplay } from "swiper/modules";
const testimonials = new Array(16).fill(null);

export default function Testimonials() {
  return (
    <div className="w-full max-w-[95%] mx-auto my-8">
      <div className="w-full">
        <SectionTitle
          heading={"WHY TRUST VAKILGIRI ?"}
          subHeading={"See what our client feels about us"}
        />
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
      </div>
    </div>
  );
}
