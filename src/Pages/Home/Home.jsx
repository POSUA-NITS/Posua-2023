import { useEffect } from "react";
import AboutUs from "./AboutUs";
import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";

import style from "./Home.module.scss";
const Home = () => {
  useEffect(() => {
    document.title = "Posua 2023";
  }, []);
  return (
    <main className={style.home}>
      <div className={style.hero_enclose}>
        <Hero />
      </div>
      <AboutUs />
    </main>
  );
};

export default Home;
