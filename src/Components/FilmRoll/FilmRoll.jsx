import React from "react";
import Styles from "./FilmRoll.module.scss";
import Clicked from "./Clicked";
import { useState } from "react";

const FilmRoll = () => {
  const [clicked, setClicked] = useState("default");
  const [winWidth, setWinWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWinWidth(window.innerWidth);
  });
  return (
    <>
      <img
        src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677700959/posua/scroll_df5mpf.gif"
        alt="<<< Scroll"
        className={Styles.scrollpoint}
      />
      <div className={winWidth > 800 ? Styles.enclose : Styles.enclose_mobile}>
        {clicked !== "default" ? (
          <Clicked clicked={clicked} setClicked={setClicked} />
        ) : (
          ""
        )}
        <div className={Styles.roll}>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
          </div>
          <div className={Styles.oneRoll}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg"
              alt=""
              className={Styles.reel}
            />
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
            <div className={Styles.imgsEnclose}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                alt=""
                className={Styles.imgs}
              />
              <div
                className={Styles.click}
                onClick={() => {
                  setClicked(
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677701145/posua/reel_r5bnes.png"
                  );
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
//         {/* <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg" alt="" />
//         <img src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677701014/posua/Reel_fuh7ny.svg" alt="" /> */}
//     </div>
//   );
// };

export default FilmRoll;
