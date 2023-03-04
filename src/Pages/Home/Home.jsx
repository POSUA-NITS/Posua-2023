import { useEffect } from "react";
import AboutUs from "./AboutUs";
import Borhomthuri from "./Borhomthuri";
import { Button } from "../../Components";
import Hero from "../../Components/Hero/Hero";
import style from "./Home.module.scss";
import Loader from "../../Components/Loader/Loader";

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
        <img
          style={{ pointerEvents: "none" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677862834/posua/Invitation_wtjxv6-min_h0nl9y.webp"
          alt=""
        />
      </div>
      <Borhomthuri />
    </main>
  );
};

export default Home;
