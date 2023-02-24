import React from "react";
import style from "./Artists.module.scss";
import leftcardpart from "../../Assets/Artists/left-card-part-removebg.png";
import topcardpart from "../../Assets/Artists/top-card-part-removebg.png";
import rightcardpart from "../../Assets/Artists/right-card-part-removebg.png";
import { upcomingartist } from "../../Data/Artistsdata";
import { previousartist } from "../../Data/Artistsdata";
const Artists = () => {
  return (
    <>
      <div className={style.artists}>
        <div className={style.artistsmain}>
          <div className={style.animateposua}>
            <div className={style.redbg}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                alt=""
              />
            </div>

            <div className={style.gmcha}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                alt=""
              />
            </div>

            <div className={style.tabla}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                alt=""
              />
            </div>

            <div className={style.flute}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                alt=""
              />{" "}
            </div>
          </div>
          <div className={style.titleholderartist}>
            {" "}
            <h1 className={style.artismainh1}>UPCOMING ARTISTS</h1>
          </div>

          <div className={style.animateposua} id={style.right}>
            <div className={style.redbg}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                alt=""
              />
            </div>

            <div className={style.gmcha}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                alt=""
              />
            </div>

            <div className={style.tabla}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                alt=""
              />
            </div>

            <div className={style.flute}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                alt=""
              />{" "}
            </div>
          </div>
        </div>

        <div className={style.allupcomingcard}>
          {upcomingartist.map((item) => {
            return (
              <>
                <div className={style.indicard}>
                  {/* <img src={artistbg} alt="" /> */}
                  <img src={topcardpart} className={style.topcardimg} alt="" />
                  <img src={leftcardpart} className={style.leftcardimg} alt="" />
                  <img src={rightcardpart} className={style.rightcardimg} alt="" />
                  <img src={item.img} className={style.artistpic} alt="" />
                  <h2 className={style.artistname}>Simanta Shekhar</h2>
                  <div className={style.artistwork}>
                    <h3>Singer</h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        <div className={style.flowerholder}>
          <img
            className={style.leftflower}
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677096323/posua/flowers-posua-removebg-preview_qjehkd12_nqdt2z.png"
            alt=""
          />
          <img
            className={style.rightflower}
            src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677096323/posua/flowers-posua-removebg-preview_qjehkd12_nqdt2z.png"
            alt=""
          />
        </div>

        <div className={style.artistsmain}>
          <div className={style.animateposua}>
            <div className={style.redbg}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                alt=""
              />
            </div>

            <div className={style.gmcha}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                alt=""
              />
            </div>

            <div className={style.tabla}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                alt=""
              />
            </div>

            <div className={style.flute}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                alt=""
              />{" "}
            </div>
          </div>
          <div className={style.titleholderartist}>
            {" "}
            <h1 className={style.artismainh1}>PREVIOUS ARTISTS</h1>
          </div>

          <div className={style.animateposua} id={style.right}>
            <div className={style.redbg}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
                alt=""
              />
            </div>

            <div className={style.gmcha}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
                alt=""
              />
            </div>

            <div className={style.tabla}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
                alt=""
              />
            </div>

            <div className={style.flute}>
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
                alt=""
              />{" "}
            </div>
          </div>
        </div>

        <div className={style.allpreviouscard}>
          {previousartist.map((item) => {
            return (
              <>
                <div className={style.indicardpast}>
                  {/* <img src={artistbg} alt="" /> */}
                  <img src={topcardpart} className={style.topcardimg} alt="" />
                  <img src={leftcardpart} className={style.leftcardimg} alt="" />
                  <img src={rightcardpart} className={style.rightcardimg} alt="" />
                  <img src={item.img} className={style.artistpic} alt="" />
                  <h2 className={style.artistname}>Simanta Shekhar</h2>
                  <div className={style.artistwork}>
                    <h3>Singer</h3>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Artists;
