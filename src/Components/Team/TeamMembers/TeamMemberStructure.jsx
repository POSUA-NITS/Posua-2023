import Lottie from "react-lottie";
import animationData from "../../../Assets/Pepa.json";
import styles from "./TeamMemStructure.module.scss";
import Gamusa from "../../../Assets/Gamusa.png";

const TeamMemberStructure = (data) => {
  const defaultOptionsPepa = {
    loop: true,
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
        <Lottie
          className={styles.LottiesSVG}
          options={defaultOptionsPepa}
          height={400}
          width={400}
        />
        <div className={styles.gamusaWriting}>
          <img src={Gamusa} />
          <p>{data.name}</p>
          <p>{data.desig}</p>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberStructure;
