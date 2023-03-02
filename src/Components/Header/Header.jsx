import styles from "./Header.module.scss";
export const Header = (props) => {
  return (
    <div className={styles.HeaderBox}>
      <div className={styles.main} id={styles.left}>
        <img
          className={styles.b}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697564/posua/b_iw5aix.svg"
          alt="b"
        />
        <img
          className={styles.d}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697638/posua/d_ylkh6u.svg"
          alt="b"
        />
        <img
          className={styles.g}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697670/posua/g_kryvgc.svg"
          alt="b"
        />
        <img
          className={styles.p}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697698/posua/p_rc5hdr.svg"
          alt="b"
        />
      </div>

      <h1 className={styles.heading} style={{ fontSize: props.fontSize }}>
        {props.title}
      </h1>

      <div className={styles.main} id={styles.right}>
        <img
          className={styles.b}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697564/posua/b_iw5aix.svg"
          alt="b"
        />
        <img
          className={styles.d}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697638/posua/d_ylkh6u.svg"
          alt="b"
        />
        <img
          className={styles.g}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697670/posua/g_kryvgc.svg"
          alt="b"
        />
        <img
          className={styles.p}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677697698/posua/p_rc5hdr.svg"
          alt="b"
        />
      </div>
    </div>
  );
};
