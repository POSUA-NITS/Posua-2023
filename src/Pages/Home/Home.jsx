import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Borhomthuri from "./Borhomthuri";
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
      <div className={style.letter}>
          <img src='https://res.cloudinary.com/dhgfsshq4/image/upload/v1677847725/posua2023/Invitation_wtjxv6.png' alt="" />
      </div>
      <Borhomthuri/>
    </main>
  );
};

export default Home;
