import data from "./data.json";
import styles from "./Events.module.scss";
import { Header } from "../../Components/Header/Header";
import { Phool } from "../../Components/Phool/Phool";
import { Carousel } from "../../Components";

const Events = () => {
  return (
    <div className={styles.main}>
      <Header title="EVENTS" />
      <div className={styles.content}>{data.content}</div>
      <Phool />
      <Carousel />
    </div>
  );
};

export default Events;
