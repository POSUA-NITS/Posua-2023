import React, { useState } from "react";
import style from "./Artists.module.scss";
import leftcardpart from "../../Assets/Artists/left-card-part-removebg.png";
import topcardpart from "../../Assets/Artists/top-card-part-removebg.png";
import rightcardpart from "../../Assets/Artists/right-card-part-removebg.png";
import Flowerinout from "./Flowerinout";
import Title from "../../Components/Title/Title";
import Playcontrols from "./Playcontrols";
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
      <Title headtitle="UPCOMING ARTISTS" />

      {togglepar && (
        <div className={style.allupcomingcard} id={style.slide50}>
          {/* artist1 starts */}
          {toggle && (
            <div className={style.indicard} onClick={handleHide} id={style.hideup}>
              {/* <img src={artistbg} alt="" /> */}
              <img src={topcardpart} className={style.topcardimg} alt="" />
              <img src={leftcardpart} className={style.leftcardimg} alt="" />
              <img src={rightcardpart} className={style.rightcardimg} alt="" />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677513047/WhatsApp_Image_2023-02-27_at_20.35.32_uo4bnn.jpg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677513050/WhatsApp_Image_2023-02-27_at_20.35.22_ai2wby.jpg")
                }
                className={style.artistpic}
                alt=""
              />

              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Priyanka Bharali</h2>
                <div className={style.artistwork}>
                  <h3>Singer</h3>
                </div>
              </div>
              <Playcontrols />
            </div>
          )}
          {/*artist1 ends */}

          {/* artist 2 starts*/}
          {toggle2 && (
            <div className={style.indicard} onClick={handleHide2} id={style.hideup}>
              {/* <img src={artistbg} alt="" /> */}
              <img src={topcardpart} className={style.topcardimg} alt="" />
              <img src={leftcardpart} className={style.leftcardimg} alt="" />
              <img src={rightcardpart} className={style.rightcardimg} alt="" />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677346353/SriGen4.0/bharali_sbpig2.jpg"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677513047/WhatsApp_Image_2023-02-27_at_20.35.32_uo4bnn.jpg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/v1677513050/WhatsApp_Image_2023-02-27_at_20.35.22_ai2wby.jpg")
                }
                className={style.artistpic}
                alt=""
              />
              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Priyanka Bharali</h2>
                <div className={style.artistwork}>
                  <h3>Singer</h3>
                </div>
              </div>
              <Playcontrols />
            </div>
          )}
          {/*artist2 ends */}
        </div>
      )}

      {/*artist 1 deatisl starts*/}
      {toggle1 && (
        <div className={style.artistdetail} id={style.detailanimate}>
          <button className={style.btnleft} onClick={handleShow2}>
            <img
              className={style.imgcross}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png"
              alt=""
            />
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
        <div className={style.artistdetail} id={style.detailanimate}>
          <button className={style.btnleft} onClick={handleShow}>
            <img
              className={style.imgcross}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png"
              alt=""
            />
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
      <Flowerinout />
    </>
  );
};

export default UpcomingArtists;
