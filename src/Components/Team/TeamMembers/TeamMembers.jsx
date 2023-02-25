import Dummy from "../../../Assets/Dummy.png";
import TeamMemberStructure from "./TeamMemberStructure";
import styles from "./TeamMember.module.scss";

const TeamMembers = () => {
  const Members = [
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: `${Dummy}`,
    },
  ];

  return (
    <div className={styles.containerMember}>
      <div className={styles.wrapper}>
        {Members.map((element, i) => (
          <TeamMemberStructure
            className={styles.teamMemStr}
            key={i}
            name={element.name}
            desig={element.desig}
            email={element.email}
            image={element.image}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
