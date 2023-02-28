import AboutUs from "./AboutUs";
import style from "./Home.module.scss";
const Home = () => {
  return (
    <main className={style.home}>
      <AboutUs />
    </main>
  );
};

export default Home;
