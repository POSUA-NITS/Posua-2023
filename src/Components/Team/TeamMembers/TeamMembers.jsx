// import Dummy from "../../../Assets/Dummy.png";
import TeamMemberStructure from "./TeamMemberStructure";
import styles from "./TeamMember.module.scss";

const TeamMembers = () => {
  const Members = [
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image: "https://res.cloudinary.com/dp92qug2f/image/upload/v1677699572/posua/Dummy_jz0yvm.png",
    },
  ];

  return (
    <div className={styles.containerMember}>
      <div className={styles.wrapper}>
        {Members.map((element, i) => (
          <TeamMemberStructure
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
