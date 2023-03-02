import AboutUs from "./AboutUs";
import Borhomthuri from "./Borhomthuri";
import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";

import style from "./Home.module.scss";
const Home = () => {
  return (
    <main className={style.home}>
      <Hero />
      <AboutUs />
      <Borhomthuri/>
    </main>
  );
};

export default Home;
