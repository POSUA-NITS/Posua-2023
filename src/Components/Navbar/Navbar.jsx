import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul style={{ display: "flex" }}>
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
        <li>
          <Link to="/artists">Artists</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
