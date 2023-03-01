import React from "react";
import Styles from "./FilmRoll.module.scss";
import './FilmRoll.css'
import { useState } from "react";

const Clicked = (props) => {
  const { clicked, setClicked } = props;
  const [winWidth, setWinWidth] = useState(window.innerWidth)

  window.addEventListener('resize',()=>{
    setWinWidth(window.innerWidth)
  })

  return (
    <>
      <div
        className={Styles.backdrop}
        onClick={() => {
          setClicked("default");
        }}
      ></div>
      <div className={`${winWidth>800?Styles.clicked:Styles.clicked_mobile} clicked`}>
        <img src={clicked} alt="" />
      </div>
    </>
  );
};

export default Clicked;
