import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, Autoplay } from "swiper";
import styles from "./Carousel.module.scss";
import { CarouselCard, CarouselButton } from "../../Components";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.scss";

const data = [
  {
    idx: 1,
    title: "Rongili",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur",
  },

  {
    idx: 2,
    title: "Bihu",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur",
  },

  {
    idx: 3,
    title: "Magh",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quo",
  },

  {
    idx: 4,
    title: "Bordoisila",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quod quae unde nobis inventore. Modi magni adipisci labore,Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },

  {
    idx: 5,
    title: "Pitha",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantium alias tenetur, fugiat qui libero perferendis hic porro eaque sint dignissimos maxime incidunt quos asperiores quod quae unde nobis inventore. Modi magni adipisci labore,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore debitis veniam velit sunt harum, consequuntur ut perspiciatis? Dicta, velit! Rem et accusantiu",
  },
];

const Carousel = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slide, _] = useState(data);
  const [activeSlideIdx, setactiveSlideIdx] = useState(1);
  const slideTo = (index) => {
    setactiveSlideIdx(index);
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <>
      <div className={styles.btncont}>
        {data.map((val, idx) => {
          return (
            <CarouselButton
              key={idx}
              data={{
                text: val.title,
                onClick: () => slideTo(idx + 1),
                active: activeSlideIdx === val.idx,
              }}
            />
          );
        })}
      </div>

      <Swiper
        onSwiper={setSwiperRef}
        effect={"coverflow"}
        navigation={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: true,
        }}
        centeredSlides={true}
        slidesPerView={1}
        coverflowEffect={{
          rotate: 0,
          stretch: 100,
          depth: 10,
          modifier: 1,
          scale: 0.8,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
      >
        {slide.map((slideContent, index) => {
          return (
            <SwiperSlide key={index} virtualIndex={index}>
              <CarouselCard data={slideContent} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carousel;
