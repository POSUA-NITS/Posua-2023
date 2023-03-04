import { useEffect } from "react";
import data from "./data.json";
import styles from "./Events.module.scss";
import { Header } from "../../Components/Header/Header";
// import { Phool } from "../../Components/Phool/Phool";
import { Carousel, Navbar } from "../../Components";
import Flowerinout from "../Artists/Flowerinout";
const Events = () => {
  useEffect(() => {
    document.title = "Events | Posua 2023";
  }, []);

  return (
    <>
      <div className={styles.main}>
        <Header title="EVENTS" fontSize="6vw" />
        <div className={styles.content}>{data.content}</div>
        {/* <Phool /> */}
        <br />
        <Flowerinout />
        <Carousel />
      </div>
    </>
  );
};

export default Events;
