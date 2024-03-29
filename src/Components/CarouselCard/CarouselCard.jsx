import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ data }) => {
  return (
    <div className={styles.main}>
      {/* <img className={styles.image} src="/assets/stock.webp" /> */}
      <img className={styles.image} src={data.src} />
      <div className={styles.overlay}>
        <div className={styles.heading}>
          {/* <img className={styles.jaapileft} src="/assets/jaapi.webp" /> */}
          <img
            className={styles.jaapileft}
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701966/posua/jaapi_c8sz7a.webp"
          />
          {data.title}
          {/* <img className={styles.jaapiright} src="/assets/jaapi.webp" /> */}
          <img
            className={styles.jaapiright}
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701966/posua/jaapi_c8sz7a.webp"
          />
        </div>
        <div className={styles.content}>{data.content}</div>
      </div>
    </div>
  );
};

export default CarouselCard;
