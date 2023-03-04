import React, { useEffect } from "react";
import styles from "./Team.module.scss";
import TeamPosuaWording from "../../Components/Team/TeamPosuaWording/TeamPosuaWording";
import TeamMember from "../../Components/Team/TeamMembers/TeamMembers.jsx";
import ImageSlider from "../../Components/Team/TeamWiseSlider/ImageSlider";
import { Header } from "../../Components/Header/Header";
const Teams = () => {
  useEffect(() => {
    document.title = "Team | Posua 2023";
  }, []);
  return (
    <div className={styles.containerTeam}>
      <div className={styles.headteam}>
        <Header title="TEAM POSUA" fontSize="6vw" />
      </div>
      <TeamPosuaWording />
      <TeamMember />
      <ImageSlider title="Web" />
      <ImageSlider title="Developers" />
      <ImageSlider title="Executive-Heads" />
      <ImageSlider title="Marketing" />
      <ImageSlider title="Infra" />
      <ImageSlider title="Design" />
      <ImageSlider title="Decoration" />
      <ImageSlider title="Event-Management" />
      <ImageSlider title="Hospitality" />
      <ImageSlider title="Cultural-Rally" />
      <ImageSlider title="Logistics" />
      <ImageSlider title="Content" />
      <ImageSlider title="T-Shirt" />
    </div>
  );
};

export default Teams;
