import Lottie from "react-lottie";
import animationData from "../../../Assets/Pepa.json";
import styles from "./TeamMemStructure.module.scss";
import Gamusa from "../../../Assets/Gamusa.png";
import { useState, useEffect } from "react";

const TeamMemberStructure = (data) => {
  const defaultOptionsPepa = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [Stopped, setIsStopped] = useState(true);
  // const anima = () => {
  //   setIsStopped(false);
  // }

  const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className={styles.containerMemStructure}>
      <div className={styles.teamMemberGrid}>
        <div className={styles.imageHoldingWrapper}>
          <div className={styles.emptyColoredDiv}>
            <img className={styles.imgForEmpty} src={data.image} />
          </div>
        </div>
        <div
          className={styles.LottiesSVG}
          onMouseOver={() => setIsStopped(false)}
          onMouseOut={() => setIsStopped(true)}
        >
          <Lottie
            options={defaultOptionsPepa}
            height={windowSize[1] < 420 ? 300 : 400}
            width={windowSize[1] < 420 ? 300 : 430}
            isStopped={Stopped}
          />
        </div>
        <div className={styles.gamusa}>
          <img src={Gamusa} className={styles.imageGamusa} />
          <div className={styles.gamusaWriting}>
            <p>{data.name}</p>
            <p>{data.desig}</p>
            <p>{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberStructure;
