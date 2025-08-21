import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center text-white overflow-hidden"
    >
      {/* Carousel Background */}
      <Swiper
        modules={[Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 h-full w-full mySwiper"
      >
        <SwiperSlide>
          <img
            src="/images/bg.JPG"
            alt="Villa Greenery"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/gallery7.png"
            alt="Luxury Villas"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/gallery5.png"
            alt="Nature Lifestyle"
            className="h-full w-full object-cover"
          />
        </SwiperSlide>
      </Swiper>

      {/* Overlay for Dark Tint */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Content on Top */}
      <div className="relative z-20 text-center mt-20 sm:mt-32 md:mt-40 max-w-7xl px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-snug sm:leading-tight text-green-200">
          Experience the joy of living closer to nature at
          <span className="block text-3xl sm:text-5xl lg:text-7xl mt-2 sm:mt-4 text-white">
            Nagole, Hyderabad
          </span>
        </h1>

        <p className="text-lg sm:text-2xl lg:text-3xl mb-6 sm:mb-12 font-light text-green-100">
          The Next High-Growth Corridor
        </p>

        <button
          onClick={() =>
            document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="btn-primary-custom flex items-center space-x-2 sm:space-x-3 text-sm sm:text-lg px-4 sm:px-8 py-2 sm:py-4 border-2 border-white bg-transparent hover:bg-white hover:text-green-700 mx-auto"
        >
          <span>Get Details Now</span>
        </button>

        {/* Key Benefits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-lg sm:max-w-3xl mx-auto mt-6 sm:mt-8 text-xs sm:text-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <h3 className="font-semibold mb-1">Lush Green Surroundings</h3>
            <p className="text-green-200">Breathe fresh air every day</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-white/20">
            <h3 className="font-semibold mb-1">Close to Nature</h3>
            <p className="text-green-200">Scenic views & forest nearby</p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default HeroSection;
