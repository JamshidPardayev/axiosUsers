import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="w-full h-[500px] max-sm:h-[300px]"
      >
        <SwiperSlide>
          <img
            src="./swiper1.jpg"
            className="w-full h-full object-cover"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            className="w-full h-full object-cover"
            alt="slide1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./swiper2.jpg"
            className="w-full h-full object-cover"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            className="w-full h-full object-cover"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./swiper3.jpg"
            className="w-full h-full object-cover"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            className="w-full h-full object-cover"
            alt="slide3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./swiper4.jpg"
            className="w-full h-full object-cover"
            alt="slide2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            className="w-full h-full object-cover"
            alt="slide4"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default React.memo(Hero);
