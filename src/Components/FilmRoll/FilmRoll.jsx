import React from "react";
import Styles from "./FilmRoll.module.scss";
import Clicked from "./Clicked";
import { useState } from "react";
import data from "./gallery.json";

const FilmRoll = (props) => {
  const [clicked, setClicked] = useState("default");
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const [winHeight, setWinHeight] = useState(window.innerHeight);
  const { year, setYear } = props;

  const img = data[year.toString()] ? data[year.toString()].imgs : "";

  // console.log(data[year.toString()]?data[year.toString()].imgs[0]:'');
  console.log(img ? img[1] : "");

  window.addEventListener("resize", () => {
    setWinWidth(window.innerWidth);
    setWinHeight(window.innerHeight);
  });
  return (
    <>
      <img
        src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677700959/posua/scroll_df5mpf.gif"
        alt="<<< Scroll"
        className={Styles.scrollpoint}
      />
      <div
        className={
          winWidth > 800 && winHeight < winWidth ? Styles.enclose : Styles.enclose_mobile
        }
      >
        {clicked !== "default" ? (
          <Clicked clicked={clicked} setClicked={setClicked} />
        ) : (
          ""
        )}
        <div className={Styles.roll}>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.webp"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[0] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[0] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[1] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[1] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[2] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[2] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[3] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[3] : "");
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.webp"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[4] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[4] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[5] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[5] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[6] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[6] : "");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src={img ? img[7] : ""} alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(img ? img[7] : "");
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//         {/* <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.webp" alt="" />
//         <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.webp" alt="" /> */}
//     </div>
//   );
// };

export default FilmRoll;
