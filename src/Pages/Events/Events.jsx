import data from "./data.json";
import styles from "./Events.module.scss";
import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components";
// import Flowerinout from "../Artists/Flowerinout";
// import Title from "../../Components/Title/Title";
// import style from '../../Pages/Artists/Artists.module.scss'
const Events = () => {
  return (
    <div className={styles.main}>
      <Header title="EVENTS" />
{/* <Title headtitle="EVENTS" /> */}
      <div className={styles.phoolTema}>
        <img id={styles.phoolRight} src="src/Assets/flowerbrown.png" alt="" />
        <img id={styles.phoolLeft} src="src/assets/flower.png" alt="" />
      </div>
      {/* <Flowerinout /> */}
      <div className={styles.content}>{data.content}</div>
      <Carousel />
    </div>
  );
};

export default Events;
