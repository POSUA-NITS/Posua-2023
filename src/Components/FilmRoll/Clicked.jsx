import React from "react";
import Styles from "./FilmRoll.module.scss";
import { useState } from "react";
import "./FilmRoll.css";

const Clicked = (props) => {
  const { clicked, setClicked } = props;
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);

  window.addEventListener("resize", () => {
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
  });

  return (
    <>
      <div
        className={Styles.backdrop}
        onClick={() => {
          setClicked("default");
        }}
      ></div>
      <div
        className={`${
          winWidth > 800 && winHeight < winWidth ? Styles.clicked : Styles.clicked_mobile
        } clicked`}
      >
        <img src={clicked} alt="" />
      </div>
    </>
  );
};

export default Clicked;
