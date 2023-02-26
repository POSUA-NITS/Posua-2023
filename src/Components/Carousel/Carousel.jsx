import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Mousewheel } from "swiper";

import { CarouselCard } from "../../Components";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Carousel.scss";

const Carousel = () => {
  const data = {
    title: "Rongili",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quod quae unde nobis inventore. Modi magni adipisci labore,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quod quae unde nobis inventore. Modi magni adipisci labore, corporis dolorem fuga ipsa?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quod quae unde nobis inventore. Modi magni adipisci labore, corporis dolorem fuga ipsa? corporis dolorem fuga ipsa?",
  };
  return (
    <>
      <Swiper
        effect={"coverflow"}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        coverflowEffect={{
          rotate: 0,
          stretch: 80,
          depth: 10,
          modifier: 1,
          scale: 0.8,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Mousewheel]}
      >
        <SwiperSlide>
          <CarouselCard data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard data={data} />
        </SwiperSlide>
        <SwiperSlide>
          <CarouselCard data={data} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
