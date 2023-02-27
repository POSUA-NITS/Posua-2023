import data from "./data.json";
import styles from "./Events.module.scss";
import { Header } from "../../Components/Header/Header";
import { Phool } from "../../Components/Phool/Phool";
const Events = () => {
  return (
    <div className={styles.main}>
      <Header title="EVENTS" />
      <div className={styles.content}>{data.content}</div>
      <Phool />
    </div>
  );
};

export default Events;
