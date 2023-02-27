import React, { useState } from "react";
import style from "./Artists.module.scss";
import leftcardpart from "../../Assets/Artists/left-card-part-removebg.png";
import topcardpart from "../../Assets/Artists/top-card-part-removebg.png";
import rightcardpart from "../../Assets/Artists/right-card-part-removebg.png";
import Title from "../../Components/Title/Title";
const PreviousArtists = () => {
  const [togglepast, setTogglepast] = useState(true);
  {/* artist1*/ }
  const [togglePa1, setTogglePa1] = useState(false);
  function handleShowpa1() {
    setTogglepast(!togglepast);
    setTogglePa1(!togglePa1);
  }
  function handleHidepa1() {
    setTogglepast(!togglepast);
    setTogglePa1(!togglePa1);
  }
  {/* artist1*/ }

  {/* artist2*/ }
  const [togglePa2, setTogglePa2] = useState(false);
  function handleShowpa2() {
    setTogglepast(!togglepast);
    setTogglePa2(!togglePa2);
  }
  function handleHidepa2() {
    setTogglepast(!togglepast);
    setTogglePa2(!togglePa2);
  }
  {/* artist2*/ }

  {/* artist3*/ }
  const [togglePa3, setTogglePa3] = useState(false);
  function handleShowpa3() {
    setTogglepast(!togglepast);
    setTogglePa3(!togglePa3);
  }
  function handleHidepa3() {
    setTogglepast(!togglepast);
    setTogglePa3(!togglePa3);
  }
  {/* artist3*/ }

  {/* artist4*/ }
  const [togglePa4, setTogglePa4] = useState(false);
  function handleShowpa4() {
    setTogglepast(!togglepast);
    setTogglePa4(!togglePa4);
  }
  function handleHidepa4() {
    setTogglepast(!togglepast);
    setTogglePa4(!togglePa4);
  }
  {/* artist4*/ }

  {/* artist5*/ }
  const [togglePa5, setTogglePa5] = useState(false);
  function handleShowpa5() {
    setTogglepast(!togglepast);
    setTogglePa5(!togglePa5);
  }
  function handleHidepa5() {
    setTogglepast(!togglepast);
    setTogglePa5(!togglePa5);
  }
  {/* artist5*/ }

  {/* artist6*/ }
  const [togglePa6, setTogglePa6] = useState(false);
  function handleShowpa6() {
    setTogglepast(!togglepast);
    setTogglePa6(!togglePa6);
  }
  function handleHidepa6() {
    setTogglepast(!togglepast);
    setTogglePa6(!togglePa6);
  }
  {/* artist6*/ }
  return (
    <>
      <Title headtitle="PREVIOUS ARTISTS" />
      {/* <div className={style.tlebr}>
        <Header title="PREVIOUS ARTISTS" />
      </div> */}
      {togglepast && (
        <div className={style.allpreviouscard}>

          {/*artist1 */}
          <div className={style.indicardpast} onClick={handleShowpa1} >
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist1 */}
          {/*artist2 */}
          <div className={style.indicardpast} onClick={handleShowpa2} >
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist2 */}

          {/*artist3 */}
          <div className={style.indicardpast} onClick={handleShowpa3} >
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist3 */}

          {/*artist4 */}
          <div className={style.indicardpast} onClick={handleShowpa4}>
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist4 */}

          {/*artis5 */}
          <div className={style.indicardpast} onClick={handleShowpa5} >
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist5 */}

          {/*artist6 */}
          <div className={style.indicardpast} onClick={handleShowpa6}>
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
              <h2 className={style.artistname}>Past Artist1</h2>
              <div className={style.artistwork}>
                <h3>Singer</h3>
              </div>
            </div>
            <div className={style.btmartist}> </div>
          </div>
          {/*artist6 */}

        </div>
      )}

      {/*artist detail1*/}
      {togglePa1 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa1} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast1</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast0, the spring fest of NIT Silchar, spreads out exuberance all around
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

      {togglePa2 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa2} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast2</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast2, the spring fest of NIT Silchar, spreads out exuberance all around
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

      {togglePa3 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa3} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast2</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast2, the spring fest of NIT Silchar, spreads out exuberance all around
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

      {togglePa4 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa4} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast2</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast2, the spring fest of NIT Silchar, spreads out exuberance all around
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

      {togglePa5 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa5} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast2</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast2, the spring fest of NIT Silchar, spreads out exuberance all around
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

      {togglePa6 && (
        <div className={style.artistdetail}>
          <button className={style.btnleft} onClick={handleHidepa6} >
            <img className={style.imgcross} src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png" alt="" />
          </button>
          <h1>Priyanka Bharalipast6</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              POSUAPast6, the spring fest of NIT Silchar, spreads out exuberance all around
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
    </>
  );
};
export default PreviousArtists;
