import styles from "./Header.module.scss";
export const Header = (props) => {
  return (
    <div className={styles.HeaderBox}>
      <div className={styles.main} id={styles.left}>
        <img className={styles.b} src="src/Assets/DholPepa/b.svg" alt="b" />
        <img className={styles.d} src="src/Assets/DholPepa/d.svg" alt="b" />
        <img className={styles.g} src="src/Assets/DholPepa/g.svg" alt="b" />
        <img className={styles.p} src="src/Assets/DholPepa/p.svg" alt="b" />
      </div>

      <h1>{props.title}</h1>

      <div className={styles.main} id={styles.right}>
        <img className={styles.b} src="src/Assets/DholPepa/b.svg" alt="b" />
        <img className={styles.d} src="src/Assets/DholPepa/d.svg" alt="b" />
        <img className={styles.g} src="src/Assets/DholPepa/g.svg" alt="b" />
        <img className={styles.p} src="src/Assets/DholPepa/p.svg" alt="b" />
      </div>
    </div>
  );
};