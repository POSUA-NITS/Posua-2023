import React from "react";
import style from "./Artists.module.scss";
// import styles from '../Events/Events.module.scss'
// import { Header } from "../../Components/Header/Header";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay } from "swiper";
import { HoverSlideshow } from "react-hover-slideshow";
import UpcomingArtists from "./UpcomingArtists";
import PreviousArtists from "./PreviousArtists";
const Artists = () => {
  return (
    <>
      <div className={style.artists}>
        <UpcomingArtists />
        <PreviousArtists />
      </div>
    </>
  );
};

export default Artists;
