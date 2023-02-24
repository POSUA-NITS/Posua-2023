import { Link } from "react-router-dom";
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/teams">Teams</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
