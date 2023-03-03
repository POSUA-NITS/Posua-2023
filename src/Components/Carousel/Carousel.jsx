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
    title: "Abhijatri",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877107/Abhijatri_ysypiw.webp",
    content:
      "The beauty and the test of our society will be how well we can achieve unity in diversity. Since the turn of the century, BorAxom has welcomed many communities and tribes into its fold, whose fusion has facilitated the development of the Greater Assamese Culture. In this cultural gathering that we refer to as \"Abhijatri,\" we NITians will demonstrate the timeline of our society, its holidays, and traditions",
  },

  {
    idx: 2,
    title: "Rongili",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877110/Rongii_nnkeiq.webp",
    content:
      "The performing art of dancing creates an ecstatic trance state in both the audience and the actors. The various events under Posua also include \"Rongili,\" the Female Bihu Dance Competition, which gives participants a stage  to showcase their dancing prowess and express their love for Bihu. This competition gives participants a chance to represent our culture and indigeneity through distinctive moves. The female Bihu dancers' dazzling movements convey their affection for the dance form as well as for our motherland in general. The audience is captivated by the beautiful performances of the Gabhorus  in this zealous and mesmerising atmosphere.",
  },

  {
    idx: 3,
    title: "Krishti",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877107/Kristi_uak3dg.webp",
    content:
      "As Posua celebrates the rich and diverse culture and traditions of the land of Assam, blending them together in a harmonious way, the festival of Krishti provides a unique opportunity to witness the beautiful evolution of time and to experience the intricate cultural fusion of the people who have inhabited this land for generations, resulting in a majestic society that reflects the amalgamation of these diverse cultures. Whether we live along the banks of the Barak or Brahmaputra rivers, we are all interwoven into a beautiful tapestry through the golden threads of our shared heritage.",
  },

  {
    idx: 4,
    title: "Manthan",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877107/Manthan_rntb2u.webp",
    content:
      "Manthan is the most highly anticipated event of POSUA, as it brings together the most talented performers from Assam to energise everyone on the campus. In past years, renowned artists such as Zubeen Garg, Priyanka Bharali, Dikshu, and Srimanta Shekhar have graced the Manthan stage with their outstanding performances. This year too, the NITS Family is eagerly looking forward to the magnificent Manthan at POSUA’ 23.",
  },

  {
    idx: 5,
    title: "Rongtulika",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877108/Rangtulika_ohucke.webp",
    content:"Rongtulika is an art contest organized by POSUA that offers young and creative minds a chance to give life to their imagination with a vivid spectrum of colors. It is a platform where children can express their ideas and thoughts on canvas, using different shades to create vibrant art works. The competition is not just an exciting event for the young participants, but also for the audience who get to witness the little artists skillfully blend their perspectives with beauty and grace.",
  },

  // {
  //   idx: 6,
  //   title: "Borhumthuri",
  //   src: "",
  //   content:"POSUA's annual souvenir is called Borhomthuri. In the form of captivating articles, poetry, stories, and sketches, it encompasses essential facets of Assamese culture as well as the feelings of pupils. The possibility for students' literary abilities to be resurrected is provided by Borhomthuri, which captures the enthusiasm of the NITS Family for POSUA",
  // },
  {
    idx: 7,
    title: "Hengul-Haital",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877106/HengulHaital_igipxk.webp",
    content:"In the  \"Hengul-Haital\" event, the vivacity of open Husori Bihu meets the stage's disclosure. The traditional rhythms and beats of \"Dhol, Pepa, and Taal\" energise the atmosphere and transform it into a joyful one.",
  },
  {
    idx: 8,
    title: "Ankuran",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877107/Ankuran_ts9yp1.webp",
    content:"Ankuran gives us a sense of understated elegance by fusing a child's innocence with a culture's wealth. The air is energised by the beats of the sweet Bihu melodies, \"the dhols, and pepas,\" heightened by the cuteness of the little children. Together with the performance, the crowd can't help but dance. Everyone can be moved by the dazzling movements of innocence.",
  },
  {
    idx: 9,
    title: "Rang Ghar",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877106/Rangghar_npzabr.webp",
    content:"The \"Posua\" local sports part transports us to the sweltering amphitheatre of Rang-Ghar in old Rangpur. The occasion allows us to partake in savoury competitions that allow us to delve deeper into our culture's origins.",
  },
  {
    idx: 10,
    title: "Bordoisila",
    src: "https://res.cloudinary.com/dldebeast/image/upload/v1677877107/Bordoisila_kdkvdy.webp",
    content:"The gorgeous \"Gabhorus,\" clothed in magnificent golden silk, is engulfing the NITS campus with their mesmerising performances, much like the seasonal wind \"Bordoisila\"  that rushes back to her family's home, carrying everything in her ardour and bustle. As the new \"Kopou,\" \"Gagana,\" \"Gamkharu,\" \"Junbiri,\" \"Hasoti,\" and \"Borhomthuri\" add to their attraction, this festival breathes the intensity and joy of spring.",
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
                img: val.src,
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
