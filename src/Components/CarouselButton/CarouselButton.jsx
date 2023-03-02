import styles from "./CarouselButton.module.scss";

const CarouselButton = ({ data }) => {
  return (
    <button onClick={data.onClick} className={styles.button}>
      <div className={styles.container}>
        {data.text}
        {data.active && (
          <img
            className={styles.image}
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701966/posua/jaapi_c8sz7a.svg"
          />
        )}
      </div>
      {/* 

const CarouselButton = ({ data }) => {
  return (
    <button onClick={data.onClick} className={styles.button}>
      {data.text} */}
    </button>

    // const CarouselButton = ({ data }) => {
    //   return (
    //     <button onClick={data.onClick} className={styles.button}>
    //       {data.text}

    //     </button>
    //   );
    // };
  );
};
export default CarouselButton;
