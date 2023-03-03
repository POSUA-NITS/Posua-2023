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
        "https://res.cloudinary.com/dggtknx3n/image/upload/v1677862569/posua/WhatsApp_Image_2023-03-03_at_22.25.22_wwcmuh.webp",
    },
    {
      name: "Dr. Pranjit Barman",
      desig: "Mentor",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dggtknx3n/image/upload/v1677862420/posua/WhatsApp_Image_2023-03-03_at_22.22.04_japahv.webp",
    },
    {
      name: "Dr. LC Saikia",
      desig: "President",
      email: "lcsaikia.yahoo.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677783991/LC_Saikia_vgwgce.webp",
    },
    {
      name: "Dr. Nabanita Adhikary",
      desig: "Vice President",
      email: "nabanita.ee.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677786101/Nabanita_Adhikary_cw5kjd.webp",
    },
    {
      name: "Dr. Jyotirmoy Haloi",
      desig: "Vice President",
      email: "jyotirmoy@civil.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677784961/Jyotirmoy_Haloi_hoyyhk.webp",
    },
    {
      name: "Debanga Bikash Bora",
      desig: "Convenor",
      email: "debangabora14@gmail.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677834472/Debanga_Bikash_Bora_sj4fcq.webp",
    },
    {
      name: "Manash Pratim Goswami",
      desig: "Chief Coordinator",
      email: "manash_ug@civil.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Manash_Goswami_xuc901.webp",
    },
    {
      name: "Afsana Yasmin",
      desig: "Chief Coordinator",
      email: "afsana_ug@ece.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677787158/Afsana_Yasmin_qfdkuc.webp",
    },
    {
      name: "Chandraa Gogoi",
      desig: "Chief Coordinator",
      email: "mylittlec21@gmail.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677834728/Chandraa_Gogoi_zxaav7.webp",
    },
    {
      name: "Bhaskar Jyoti Deka",
      desig: "Chief Coordinator",
      email: "pranjit@che.nits.ac.in",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677833385/Bhaskar_Jyoti_Deka_raikzm.webp",
    },
    {
      name: "Abhijit Kalita",
      desig: "Chief Coordinator",
      email: "abhijitkalita536@gmail.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677836349/Abhijit_Kalita_h2pb3p.webp",
    },
    {
      name: "Mrinmoi Bora",
      desig: "Chief Coordinator",
      email: "Mrinmoiborah2@gmail.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677879253/Mrinmoi_Bora_n8bulz.webp",
    },
    {
      name: "Satyik Pritam Yogi",
      desig: "Treasurer",
      email: "satyikpritamy@gmail.com",
      image:
        "https://res.cloudinary.com/dldebeast/image/upload/v1677834027/Satyik_Pritam_Yogi_dpoeon.jpg",
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
            index={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
