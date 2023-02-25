import React, { useState, useEffect, useRef } from "react";
import "./Navbar.module.scss";
import posuaLogo from "./PosuaLogo.png";

function Navbarbox({ isOpen }) {
  const [activeButton, setActiveButton] = useState("Posua");

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className={`navbar ${isOpen ? "active" : ""}`}>
      <div className={`navbar-container ${isOpen ? "active" : ""}`}>
        <div>
          <a
            href="#"
            className={`navbar-button posua-button ${
              activeButton === "Posua" ? "active" : ""
            }`}
            data-btn="Posua"
            onClick={() => handleButtonClick("Posua")}
          >
            P<img src={posuaLogo} className="posualogo" />
            SUA
          </a>
        </div>
        <a
          href="#"
          className={`navbar-button ${activeButton === "Events" ? "active" : ""}`}
          data-btn="Events"
          onClick={() => handleButtonClick("Events")}
        >
          Events
        </a>
        <a
          href="#"
          className={`navbar-button ${activeButton === "Gallery" ? "active" : ""}`}
          data-btn="Gallery"
          onClick={() => handleButtonClick("Gallery")}
        >
          Gallery
        </a>
        <a
          href="#"
          className={`navbar-button ${activeButton === "Team" ? "active" : ""}`}
          data-btn="Team"
          onClick={() => handleButtonClick("Team")}
        >
          Team
        </a>
        <a
          href="#"
          className={`navbar-button ${activeButton === "Artist" ? "active" : ""}`}
          data-btn="Artist"
          onClick={() => handleButtonClick("Artist")}
        >
          Artist
        </a>
        <a
          href="#"
          className={`navbar-button ${activeButton === "Sponsors" ? "active" : ""}`}
          data-btn="Sponsors"
          onClick={() => handleButtonClick("Sponsors")}
        >
          Sponsors
        </a>
      </div>
    </nav>
  );
}

function HamburgerMenu({ isOpen, toggleMenu }) {
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        const navbar = document.querySelector(".navbar");
        if (navbar && !navbar.contains(event.target)) {
          toggleMenu(false);
        }
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [ref, toggleMenu]);

  return (
    <div
      ref={ref}
      className={`hamburger-menu ${isOpen ? "active" : ""}`}
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
