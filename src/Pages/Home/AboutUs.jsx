import React from "react";
import camera from "./camera.png"
import film from "./film.png"
import data from "./data.json";
import styles from "./AboutUs.module.scss"
const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.cameraWrap}>
        <img src={camera} alt="camera" className={styles.camera}></img>
      </div>
      <div className={styles.AboutUsfilm}>
        <div className={styles.AboutUsContent}>
          <h1>About Us</h1>
          <div className={styles.content}>{data.content}</div>
        </div>
        <img src={film} alt="flim" className={styles.film}></img>
      </div>
    </section>
  );
};

export default AboutUs;
