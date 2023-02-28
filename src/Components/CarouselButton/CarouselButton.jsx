import styles from "./CarouselButton.module.scss";

const CarouselButton = ({ data }) => {
  return (
    <button onClick={data.onClick} className={styles.button}>
      {data.text}
    </button>
  );
};

export default CarouselButton;
