import styles from "./Gallery.module.scss";
import left_flower from "../../Assets/Left_flower.png";
import right_flower from "../../Assets/right_flower.png";
import Lottie from "react-lottie-player";
import lottieJson from "../../Assets/Dhul.json";
import lface from "../../Assets/left_face.png"
import rface from "../../Assets/right_face.png"

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dhull}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 190, height: 170 }}
        />
      </div>
      <div className={styles.title}>GALLERY</div>
      <div className={styles.dhulr}>
        <Lottie
          loop
          animationData={lottieJson}
          play
          style={{ width: 190, height: 170 }}
        />
      </div>
      <p className={styles.para}>
        Photographs are memories frozen in time. To cherish the memories made during all
        the editions of Posua, we have collected and immortalised them as photographs. The
        images here are intended to take the viewers in a trip down Posua's memory lane,
        and allow everyone to enjoy and bask in the warmth of mesmerizing gaiety, an
        exhilaration of fun activities that constitute Posua.
      </p>

      <div className={styles.flowers}>
        <div className={styles.fleft}>
          <img src={left_flower} alt="image" />
        </div>
        <div className={styles.fright}>
          <img src={right_flower} alt="image" />
        </div>
      </div>

      <div className={styles.faces}>
        <div className={styles.face_left}>
           <img src={lface} alt="image" />
        </div>
        <div className={styles.face_right}>
           <img src={rface} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
