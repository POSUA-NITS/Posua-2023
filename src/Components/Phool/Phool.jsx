import styles from "./Phool.module.scss";
export const Phool = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <img
          src="src/Assets/flowerbrown.png"
          alt="flowerLeft"
          className={styles.phoolLeft}
        />
        <img
          src="src/Assets/flowerRight.png"
          alt="flowerRight"
          className={styles.phoolRight}
        />
      </div>
    </div>
  );
};
