import React from "react";
import Styles from "./FilmRoll.module.scss";
import Reel from "../../Assets/Reel.svg";
import Clicked from "./Clicked";
import { useState } from "react";

const FilmRoll = () => {
  const [clicked, setClicked] = useState("default");

  return (
    <>
      <img
        src="/assets/Reel/scroll.gif"
        alt="<<< Scroll"
        className={Styles.scrollpoint}
      />
      <div className={Styles.enclose}>
        {clicked !== "default" ? (
          <Clicked clicked={clicked} setClicked={setClicked} />
        ) : (
          ""
        )}

        <div className={Styles.roll}>
          <div className={Styles.oneRoll}>
            <img src={Reel} alt="" className={Styles.reel} />
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img src={Reel} alt="" className={Styles.reel} />
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img src={Reel} alt="" className={Styles.reel} />
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img src={Reel} alt="" className={Styles.reel} />
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img src={Reel} alt="" className={Styles.reel} />
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img src="/assets/Reel/reel.png" alt="" className={Styles.imgs} />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked("/assets/Reel/reel.png");
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

//         {/* <img src={Reel} alt="" />
//         <img src={Reel} alt="" /> */}
//     </div>
//   );
// };

export default FilmRoll;
