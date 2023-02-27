import React, { useState } from "react";
import style from "./Artists.module.scss";
import leftcardpart from "../../Assets/Artists/left-card-part-removebg.png";
import topcardpart from "../../Assets/Artists/top-card-part-removebg.png";
import rightcardpart from "../../Assets/Artists/right-card-part-removebg.png";
import { HoverSlideshow } from "react-hover-slideshow";
const UpcomingArtists = () => {
  const [togglepar, setTogglepar] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  // for artist 1
  function handleHide() {
    setTogglepar(!togglepar);
    setToggle1(!toggle1);
  }
  function handleShow2() {
    setTogglepar(!togglepar);
    setToggle1(!toggle1);
  }
  const imageURLs = [
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg",
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677494643/posua/simanta-shekhar_tpryho.jpg",
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg",
    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677494643/posua/simanta-shekhar_tpryho.jpg",
  ];
  // const activeIndex, setActiveIndex = useState(0);

  // for artist 1

  // for artist 2
  function handleHide2() {
    setTogglepar(!togglepar);
    setToggle3(!toggle3);
  }
  function handleShow() {
    setTogglepar(!togglepar);
    setToggle3(!toggle3);
  }
  // for artist 2

  return (
    <>
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

      {togglepar && (
        <div className={style.allupcomingcard}>
          {/* artist1 starts */}
          {toggle && (
            <div className={style.indicard} onClick={handleHide}>
              {/* <img src={artistbg} alt="" /> */}
              <img src={topcardpart} className={style.topcardimg} alt="" />
              <img src={leftcardpart} className={style.leftcardimg} alt="" />
              <img src={rightcardpart} className={style.rightcardimg} alt="" />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677494643/posua/simanta-shekhar_tpryho.jpg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg")
                }
                className={style.artistpic}
                alt=""
              />
              {/* <HoverSlideshow
                                // aria-label="My pretty picture slideshow"
                                images={imageURLs}
                                className={style.artistpic}
                            /> */}
              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Priyanka Bharali</h2>
                <div className={style.artistwork}>
                  <h3>Singer</h3>
                </div>
              </div>
              <div className={style.btmartist}> </div>
            </div>
          )}
          {/*artist1 ends */}

          {/* artist 2 starts*/}
          {toggle2 && (
            <div className={style.indicard} onClick={handleHide2}>
              {/* <img src={artistbg} alt="" /> */}
              <img src={topcardpart} className={style.topcardimg} alt="" />
              <img src={leftcardpart} className={style.leftcardimg} alt="" />
              <img src={rightcardpart} className={style.rightcardimg} alt="" />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg"
                className={style.artistpic}
                alt=""
              />
              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Priyanka Bharali</h2>
                <div className={style.artistwork}>
                  <h3>Singer</h3>
                </div>
              </div>
              <div className={style.btmartist}> </div>
            </div>
          )}
          {/*artist2 ends */}
        </div>
      )}

      {/*artist 1 deatisl starts*/}
      {toggle1 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleShow2}>
            <svg
              style={{ cursor: "pointer" }}
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L33 33M33 4L4 33"
                stroke="url(#paint0_linear_883_93800)"
                stroke-width="8"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_883_93800"
                  x1="4.02627"
                  y1="4.14358"
                  x2="33.9636"
                  y2="5.14583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#732B0D" />
                  <stop offset="0.489583" stop-color="#A4471B" />
                  <stop offset="1" stop-color="#93560F" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <h1>Priyanka Bharali0</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUA0, the spring fest of NIT Silchar, spreads out exuberance all around
              with the arrival of spring rejuvenating the land. This ecstatic grandeur
              lets us enliven the beauteous culture of the land of Assam with joyful
              activities bringing out the heritages and indispensable indigenous
              traditions. In this perfect period, POSUA brings a plethora of events to
              celebrate the cultural splendour of ‘Bor Axom’.POSUA, the spring fest of NIT
              Silchar, spreads out exuberance all around with the arrival of spring
              rejuvenating the land. This ecstatic grandeur lets us enliven the beauteous
              culture of the land of Assam with joyful activities bringing out the
              heritages and indispensable indigenous traditions. In this perfect period,
              POSUA brings a plethora of events to celebrate the cultural splendour of
              ‘Bor Axom’. Protidhwoni reverberates the campus with zestful spirit of
              ‘Husori dols; ‘Bordoisila’ would leave you in awe with the scintillating
              performance of ‘gabhorusPOSUA, the spring fest of NIT Silchar, spreads out
              exuberance all around with the arrival of spring rejuvenating the land.
            </h3>
          </div>
        </div>
      )}
      {/*artist 1 deatisl ends*/}

      {/*artist 2 deatisl starts*/}
      {toggle3 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleShow}>
            <svg
              style={{ cursor: "pointer" }}
              width="37"
              height="37"
              viewBox="0 0 37 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 4L33 33M33 4L4 33"
                stroke="url(#paint0_linear_883_93800)"
                stroke-width="8"
                stroke-linecap="round"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_883_93800"
                  x1="4.02627"
                  y1="4.14358"
                  x2="33.9636"
                  y2="5.14583"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#732B0D" />
                  <stop offset="0.489583" stop-color="#A4471B" />
                  <stop offset="1" stop-color="#93560F" />
                </linearGradient>
              </defs>
            </svg>
          </button>
          <h1>Priyanka Bharali1</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUA1, the spring fest of NIT Silchar, spreads out exuberance all around
              with the arrival of spring rejuvenating the land. This ecstatic grandeur
              lets us enliven the beauteous culture of the land of Assam with joyful
              activities bringing out the heritages and indispensable indigenous
              traditions. In this perfect period, POSUA brings a plethora of events to
              celebrate the cultural splendour of ‘Bor Axom’.POSUA, the spring fest of NIT
              Silchar, spreads out exuberance all around with the arrival of spring
              rejuvenating the land. This ecstatic grandeur lets us enliven the beauteous
              culture of the land of Assam with joyful activities bringing out the
              heritages and indispensable indigenous traditions. In this perfect period,
              POSUA brings a plethora of events to celebrate the cultural splendour of
              ‘Bor Axom’. Protidhwoni reverberates the campus with zestful spirit of
              ‘Husori dols; ‘Bordoisila’ would leave you in awe with the scintillating
              performance of ‘gabhorusPOSUA, the spring fest of NIT Silchar, spreads out
              exuberance all around with the arrival of spring rejuvenating the land.
            </h3>
          </div>
        </div>
      )}
      {/*artist 2 deatisl ends*/}

      <div
        className={style.flowerholder}
        style={{ userSelect: "none", pointerEvents: "none" }}
      >
        <img
          className={style.leftflower}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677491804/posua/left_flwr-removebg-preview_yymznr.png"
          alt=""
        />
        <img
          className={style.rightflower}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677486535/posua/right_flwr-removebg-preview_rt6eq7.png"
          alt=""
        />
      </div>
    </>
  );
};

export default UpcomingArtists;
