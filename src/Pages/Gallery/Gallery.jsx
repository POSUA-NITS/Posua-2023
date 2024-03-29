import { useEffect } from "react";
import styles from "./Gallery.module.scss";
import left_flower from "../../Assets/flowerbrown.png";
import right_flower from "../../Assets/right_flower.png";
import { Header } from "../../Components/Header/Header";
import Lottie from "react-lottie-player";
import lottieJson from "../../Assets/Dhul.json";
import FilmRoll from "../../Components/FilmRoll/FilmRoll";
import Flowerinout from "../Artists/Flowerinout";
import Casette from "../../Components/Casette/Casette";
import { useState } from "react";

const Gallery = () => {
  const [year, setYear] = useState("2022");

  useEffect(() => {
    document.title = "Gallery | Posua 2023";
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header title="GALLERY" fontSize="6vw" />
      </div>

      <p className={styles.para}>
        Photographs are memories frozen in time. To cherish the memories made during all
        the editions of Posua, we have collected and immortalised them as photographs. The
        images here are intended to take the viewers in a trip down Posua's memory lane,
        and allow everyone to enjoy and bask in the warmth of mesmerizing gaiety, an
        exhilaration of fun activities that constitute Posua.
      </p>

      <Flowerinout />

      {/* <div className={styles.flowers}>
        <div className={styles.phol_left}>
          <img src={left_flower} alt="image" />
        </div>
        <div className={styles.phol_right}>
          <img src={right_flower} alt="image" />
        </div>
      </div> */}

      <Casette year={year} setYear={setYear} />

      <div className={styles.faces}>
        <div className={styles.face_left}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677699206/posua/Mukha_qhrupj.webp"
            alt="image"
          />
        </div>
        <div className={styles.face_right}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677700705/posua/right_face_v0ry9m.webp"
            alt="image"
          />
        </div>
      </div>
      <FilmRoll year={year} setYear={setYear} />
    </div>
  );
};

export default Gallery;
