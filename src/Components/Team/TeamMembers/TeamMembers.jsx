// import Dummy from "../../../Assets/Dummy.png";
import TeamMemberStructure from "./TeamMemberStructure";
import styles from "./TeamMember.module.scss";

const TeamMembers = () => {
  const Members = [
    {
      name: "Dr. Rajat Gupta",
      desig: "Chief Patron",
      email: "rgupta@mech.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677783990/rajat_zptvuj.jpg",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677785003/Pranjit_Barman_zxorco.jpg",
    },
    {
      name: "Dr. LC Saikia",
      desig: "President",
      email: "lcsaikia.yahoo.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677783991/LC_Saikia_vgwgce.jpg",
    },
    {
      name: "Dr. Nabanita Adhikary",
      desig: "Vice President",
      email: "nabanita.ee.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677786101/Nabanita_Adhikary_cw5kjd.jpg",
    },
    {
      name: "Dr. Jyotirmoy Haloi",
      desig: "Vice President",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677784961/Jyotirmoy_Haloi_hoyyhk.jpg",
    },
    {
      name: "Manash Pratim Goswami",
      desig: "Chief Coorinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Manash_Goswami_xuc901.jpg",
    },
    {
      name: "Afsana Yasmin",
      desig: "Chief Coorinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Afsana_Yasmin_qfdkuc.jpg",
    },
    {
      name: "Manash Pratim Goswami",
      desig: "Chief Coorinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Manash_Goswami_xuc901.jpg",
    },
    {
      name: "Manash Pratim Goswami",
      desig: "Chief Coorinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Manash_Goswami_xuc901.jpg",
    },
    {
      name: "Manash Pratim Goswami",
      desig: "Chief Coorinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Manash_Goswami_xuc901.jpg",
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
