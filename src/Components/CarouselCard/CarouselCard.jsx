import styles from "./CarouselCard.module.scss";

const CarouselCard = ({ data }) => {
  return (
    <div className={styles.main}>
      {/* <img className={styles.image} src="/assets/stock.jpg" /> */}
      <img className={styles.image} src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677702053/posua/stock_vnov7d.jpg" />
      <div className={styles.overlay}>
        <div className={styles.heading}>
          {/* <img className={styles.jaapileft} src="/assets/jaapi.svg" /> */}
          <img className={styles.jaapileft} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701966/posua/jaapi_c8sz7a.svg" />
          {data.title}
          {/* <img className={styles.jaapiright} src="/assets/jaapi.svg" /> */}
          <img className={styles.jaapiright} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701966/posua/jaapi_c8sz7a.svg" />
        </div>
        <div className={styles.content}>{data.content}</div>
      </div>
    </div>
  );
};

export default CarouselCard;
