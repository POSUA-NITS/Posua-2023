import React, { useState, useEffect, useRef } from "react";
import Styles from "./Navbar.module.scss";
import posuaLogo from "./posualogo.png";
import { Link } from "react-router-dom";
function Navbarbox({ isOpen }) {
  const [activeButton, setActiveButton] = useState("false");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className={`${Styles.navbar}`}>
      <div className={`${Styles.navbarContainer} ${isOpen ? Styles.active : ""}`}>
        <div>
          <Link
            to="/"
            className={` ${Styles.navbarButton} ${Styles.posuaButton} ${
              activeButton === "Posua" ? Styles.active : ""
            }`}
            data-btn="Posua"
            onClick={() => handleButtonClick("Posua")}
          >
            {" "}
            P<img src={posuaLogo} className={Styles.posualogo} />
            SUA
          </Link>
        </div>
        <Link
          to="events"
          className={`${Styles.EventsButton} ${Styles.navbarButton} ${
            activeButton === "Events" ? Styles.active : ""
          }`}
          data-btn="Events"
          onClick={() => handleButtonClick("Events")}
        >
          Events
        </Link>

        <Link
          to="gallery"
          className={`${Styles.GalleryButton} ${Styles.navbarButton} ${
            activeButton === "Gallery" ? Styles.active : ""
          }`}
          data-btn="Gallery"
          onClick={() => handleButtonClick("Gallery")}
        >
          Gallery
        </Link>

        <Link
          to="teams"
          className={`${Styles.TeamButton} ${Styles.navbarButton} ${
            activeButton === "Team" ? Styles.active : ""
          }`}
          data-btn="Team"
          onClick={() => handleButtonClick("Team")}
        >
          Team
        </Link>

        <Link
          to="artists"
          className={`${Styles.ArtistButton} ${Styles.navbarButton} ${
            activeButton === "Artist" ? Styles.active : ""
          }`}
          data-btn="Artist"
          onClick={() => handleButtonClick("Artist")}
        >
          Artist
        </Link>
        <Link
          to="sponsors"
          className={`${Styles.SponsorsButton} ${Styles.navbarButton} ${
            activeButton === "Sponsors" ? Styles.active : ""
          }`}
          data-btn="Sponsors"
          onClick={() => handleButtonClick("Sponsors")}
        >
          Sponsors
        </Link>
      </div>
    </nav>
  );
}

function HamburgerMenu({ isOpen, toggleMenu }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      const isButton = event.target.closest("[data-btn]");
      if (ref.current && !ref.current.contains(event.target) && isOpen && !isButton) {
        toggleMenu(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, isOpen, toggleMenu]);

  return (
    <div
      ref={ref}
      className={`${Styles.hamburgerMenu} ${isOpen ? Styles.active : ""}`}
      onClick={() => toggleMenu(!isOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (value) => {
    setMenuOpen(value);
  };

  return (
    <div>
      <Navbarbox isOpen={menuOpen} />
      <HamburgerMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </div>
  );
}

export default Navbar;
