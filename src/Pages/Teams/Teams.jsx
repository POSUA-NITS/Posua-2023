import React, { useEffect } from "react";
import styles from "./Team.module.scss";
import TeamPosuaWording from "../../Components/Team/TeamPosuaWording/TeamPosuaWording";
import TeamMember from "../../Components/Team/TeamMembers/TeamMembers.jsx";
import ImageSlider from "../../Components/Team/TeamWiseSlider/ImageSlider";

const Teams = () => {
  useEffect(() => {
    document.title = "Team | Posua 2023";
  }, []);
  return (
    <div className={styles.containerTeam}>
      <TeamPosuaWording />
      <TeamMember />
      <ImageSlider title="team" />
      <ImageSlider title="Developers" />
      <ImageSlider title="Developers" />
    </div>
  );
};

export default Teams;
