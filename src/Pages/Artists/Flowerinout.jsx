import React from "react";
import style from "./Artists.module.scss";
const Flowerinout = () => {
  return (
    <>
      <div
        className={style.flowerholder}
        style={{ userSelect: "none", pointerEvents: "none" }}
      >
        <img
          className={style.leftflower}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_960,f_auto,fl_lossy/v1677491804/posua/left_flwr-removebg-preview_yymznr.webp"
          alt=""
        />
        <img
          className={style.rightflower}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_960,f_auto,fl_lossy/v1677486535/posua/right_flwr-removebg-preview_rt6eq7.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default Flowerinout;
