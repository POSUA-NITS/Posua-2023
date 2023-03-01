import React from "react";
import Styles from "./FilmRoll.module.scss";
import "./FilmRoll.css";

const Clicked = (props) => {
  const { clicked, setClicked } = props;

  return (
    <>
      <div
        className={Styles.backdrop}
        onClick={() => {
          setClicked("default");
        }}
      ></div>
      <div className={`${Styles.clicked} clicked`}>
        <img src={clicked} alt="" />
      </div>
    </>
  );
};

export default Clicked;
