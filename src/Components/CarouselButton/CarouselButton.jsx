import styles from "./CarouselButton.module.scss";

const CarouselButton = ({ data }) => {
  
  return (
    <button onClick={data.onClick} className={styles.button}>
      <div className={styles.container}>
        {data.text}
        {data.active && <img className={styles.image} src="/assets/jaapi.svg" />}
      </div>
</button>

// const CarouselButton = ({ data }) => {
//   return (
//     <button onClick={data.onClick} className={styles.button}>
//       {data.text}

//     </button>
//   );
// };
)}
export default CarouselButton;
