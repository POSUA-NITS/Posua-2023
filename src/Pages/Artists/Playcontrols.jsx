import React from "react";
import style from "./Artists.module.scss";
const Playcontrols = () => {
  return (
    <>
      <div className={style.btmartist}>
        <div className={style.line}>
          <div className={style.horline}></div>
          <div className={style.circle}></div>
          <div className={style.horline}></div>
        </div>

        <div className={style.playline}>
          <div className={style.ver}>
            <div className={style.verline}></div>
            <div className={style.trileft}></div>
          </div>
          <div className={style.bigcircle}>
            <div className={style.redrighttri}></div>
          </div>
          <div className={style.verrighttri}>
            <div className={style.triright}></div>
            <div className={style.verline1}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Playcontrols;
