import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ data }) => {
  return (
    <div className={styles.main}>
      <img className={styles.image} src="/assets/stock.jpg" />
      <div className={styles.overlay}>
        <div className={styles.heading}>
          <img className={styles.jaapileft} src="/assets/jaapi.svg" />
          {data.title}
          <img className={styles.jaapiright} src="/assets/jaapi.svg" />
        </div>
        <div className={styles.content}>{data.content}</div>
      </div>
    </div>
  );
};

export default CarouselCard;
