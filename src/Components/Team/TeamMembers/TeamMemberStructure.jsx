import Lottie from "react-lottie";
import animationData from "../../../Assets/Pepa.json";
import styles from "./TeamMemStructure.module.scss";
import Gamusa from "../../../Assets/Gamusa.png";

const TeamMemberStructure = (data) => {
  const defaultOptionsPepa = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={styles.containerMemStructure}>
      <div className={styles.teamMemberGrid}>
        <div className={styles.imageHoldingWrapper}>
          <div className={styles.emptyColoredDiv}>
            <img src={data.image} />
          </div>
        </div>
        <div className={styles.LottiesSVG}>
          <Lottie 
            options={defaultOptionsPepa} 
            height={400} 
            width={430} 
          />
        </div>
        <div className={styles.gamusa}>
          <img src={Gamusa} />
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
