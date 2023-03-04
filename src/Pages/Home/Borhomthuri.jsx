import React from "react";
import styles from "./Borhomthuri.module.scss";
import { Header } from "../../Components/Header/Header";

const Borhomthuri = () => {
  return (
    <section className={styles.borhomthuri}>
      <div className={styles.header}>
        <Header title="BORHOMTHURI" fontSize="5vw" />
      </div>
      <div className={styles.para}>
        <p>
          Borhomthuri is the annual souvenir of POSUA. It enfolds indispensable parts of
          Assamese Culture and also the emotions of students in the form of enthralling
          articles,poems,stories and sketches. Borhomthuri reflects the ardour of NITS
          Family towards POSUA and provides an opportunity for the literary skills of
          students to get revived.
        </p>
      </div>

      <div className={styles.maincasette}>
        <div className={styles.casettereell}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677863894/posua/leftreel-min_ta27cl.webp"
            className={styles.wheel}
            alt="image"
          />

          <a
            href="https://drive.google.com/file/d/17sXVH1QLGPC4uB4OxDTJECIvQb5Lmlei/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf1} ${styles.pdfs}`}
          ></a>
          <a
            href="https://drive.google.com/file/d/1ajRjjvoH8hCjXx0j5hKPdAMoJ3CykjDF/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf2} ${styles.pdfs}`}
          ></a>
          <a
            href="https://drive.google.com/file/d/1j2WOPZXNL31CqiUylghfRh8jQObq2NDq/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf3} ${styles.pdfs}`}
          ></a>
          <a
            href="https://docs.google.com/document/d/1KuPgoUgvejM5vVWe8TjMumhewcKzEWsQfOd14WPBto0/edit?usp=share_link"
            target="_blank"
            className={`${styles.pdf4} ${styles.pdfs}`}
          ></a>
        </div>

        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677864241/posua/borhomthuricasette-min_ut8e2a.webp"
          alt="image"
        />

        <div className={styles.casettereelr}>
          <img
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677863804/posua/rightreel-min_lxrtad.webp"
            alt="image"
          />
          <a
            href="https://drive.google.com/file/d/1yGROu16Gu_IjEjDxznBZd5dob_Gf_ddl/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf5} ${styles.pdfs2}`}
          ></a>
          <a
            href="https://drive.google.com/file/d/1ijJLJO2SNS4CX-SAZtFJSC-mKeg7gxMv/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf6} ${styles.pdfs2}`}
          ></a>
          <a
            href="https://drive.google.com/file/d/1Y8ZVgXoLMVkyqDe732T_-A-FZL7LQ5CE/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf7} ${styles.pdfs2}`}
          ></a>
          <a
            href="https://drive.google.com/file/d/1cwh4FOwiud1WqRrtWo8xu2NqBDWCKIbd/view?usp=share_link"
            target="_blank"
            className={`${styles.pdf8} ${styles.pdfs2}`}
          ></a>
        </div>
      </div>
    </section>
  );
};

export default Borhomthuri;
