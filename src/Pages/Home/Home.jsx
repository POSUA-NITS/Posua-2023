import AboutUs from "./AboutUs";
import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";

import style from "./Home.module.scss";
const Home = () => {
  return (
    <main className={style.home}>
      <AboutUs />
      <Hero />
    </main>
  );
};

export default Home;
