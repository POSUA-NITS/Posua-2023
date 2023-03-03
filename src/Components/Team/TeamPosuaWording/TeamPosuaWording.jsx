import styles from "./TeamPosuaWord.module.scss";

const TeamPosuaWording = () => {
  return (
    <>
      <div className={styles.texturebg}>
        <div className={styles.containerTeamWordMukha}>
          <div className={styles.WordingMukha1}>
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677699206/posua/Mukha_qhrupj.webp" />
          </div>
          <div className={styles.WordingTeamPosua}>
            <div className={styles.center}>
              <h1 className={styles.Heading}>TEAM POSUA</h1>
            </div>
            <p>
            Posua is not just a fiesta; it's an emotional journey for the Assamese residents of NIT Silchar. It's a moment to commemorate their vast and rich cultural identity and demonstrate their love and pride for their roots. The festival fosters a sense of belonging, camaraderie and keeps the Assamese culture alive in the hearts of the residents. The festival is a kaleidoscope of colors, sounds, emotions, an emotion that connects the residents with their roots and keep them grounded in their identity, and that brings the campus to life.
            </p>
          </div>
          <div className={styles.WordingMukha2}>
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677699206/posua/Mukha_qhrupj.webp" />
          </div>
        </div>

        <div className={styles.containerflower}>
          <div className={styles.flower2}>
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677699466/posua/flower_eube3x.webp" />
          </div>
          <div className={styles.flower}>
            <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677699466/posua/flower_eube3x.webp" />
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPosuaWording;
