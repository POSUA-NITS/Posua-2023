import React from "react";
import data from "./data.json";
import styles from "./AboutUs.module.scss";
const AboutUs = () => {
  return (
    <section className={styles.aboutUs}>
      <div className={styles.cameraWrap}>
        <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677702586/posua/camera_pbkow5.png" alt="camera" className={styles.camera}></img>
      </div>
      <div className={styles.AboutUsfilm}>
        <div className={styles.AboutUsContent}>
          <h2 className={styles.AboutUsHeader}>About Us</h2>
          <div className={styles.content}>{data.content}</div>
        </div>
        <img src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677702656/posua/film_eu7rig.png" alt="flim" className={styles.film}></img>
      </div>
    </section>
  );
};

export default AboutUs;
