import Lottie from "react-lottie";
import animationData from "../../../Assets/Pepa.json";
import styles from "./TeamMemStructure.module.scss";
import { useState } from "react";

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

  return (
    <div className={styles.containerMemStructure}>
      <div className={styles.teamMemberGrid}>
        <div className={styles.imageHoldingWrapper}>
          <div className={styles.emptyColoredDiv}>
            <img src={data.image} />
          </div>
        </div>
        <div
          className={styles.LottiesSVG}
          onMouseOver={() => setIsStopped(false)}
          onMouseOut={() => setIsStopped(true)}
        >
          <Lottie
            options={defaultOptionsPepa}
            height={400}
            width={430}
            isStopped={Stopped}
          />
        </div>
        <div className={styles.gamusa}>
          <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677700061/posua/Gamusa_f1677o.webp" />
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
