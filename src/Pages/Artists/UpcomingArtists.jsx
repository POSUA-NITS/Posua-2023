import React, { useState } from "react";
import style from "./Artists.module.scss";
import Flowerinout from "./Flowerinout";
import Title from "../../Components/Title/Title";
import Playcontrols from "./Playcontrols";
import { Header } from "../../Components/Header/Header";
import { useLocation } from "react-router-dom";

const UpcomingArtists = () => {
  const [togglepar, setTogglepar] = useState(true);
  const [toggle, setToggle] = useState(true);
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);
  const [toggle4, setToggle4] = useState(false);
  const [toggle7, setToggle7] = useState(false);
  const [toggle8, setToggle8] = useState(false);

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

   // for artist 3
   function handleHide7() {
    // useLocation('/#activeartist1')
    setTogglepar(!togglepar);
    setToggle8(!toggle8);
  }
  function handleShow8() {
    setTogglepar(!togglepar);
    setToggle8(!toggle8);
  }
  // for artist 3

  return (
    <>
      {/* <Title headtitle="UPCOMING ARTISTS" /> */}
      <div className={style.headBox}>
        <Header title="UPCOMING ARTIST" fontSize="6vw" />
      </div>

      {togglepar && (
        <div className={style.allupcomingcard} id={style.slide50}>
          {/* artist1 starts */}
          {toggle && (
            <div className={style.indicard} id={style.hideup} onClick={handleHide} >
              {/* <img src={artistbg} alt="" /> */}
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677668382/posua/top-card-part-removebg_nzcc0n.webp"
                className={style.topcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668178/posua/left-card-part-removebg_ojv4ts.webp"
                className={style.leftcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668485/posua/right-card-part-removebg_yhebcv.webp"
                className={style.rightcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677782533/posua/WhatsApp_Image_2023-03-03_at_00.04.39_u24mdj.jpg"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_760,f_auto,fl_lossy/v1677782527/posua/WhatsApp_Image_2023-03-03_at_00.04.39_1_wiyobs.jpg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_760,f_auto,fl_lossy/v1677782744/posua/WhatsApp_Image_2023-03-03_at_00.15.12_nhe9xz.jpg")
                }
                className={style.artistpic} id={style.coverimg}
                alt=""
              />

              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Dikshu Sharma</h2>
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
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677668382/posua/top-card-part-removebg_nzcc0n.webp"
                className={style.topcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668178/posua/left-card-part-removebg_ojv4ts.webp"
                className={style.leftcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668485/posua/right-card-part-removebg_yhebcv.webp"
                className={style.rightcardimg}
                alt=""
              />
              <img
                src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677782665/posua/_V8A7149_1_mhwnqj.jpg"
                onMouseOver={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677782628/posua/ranjit_gogoi_jtw2m6.jpg")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.src =
                    "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677783229/posua/DSC_0102_1_-min_obvt2f.jpg")
                }
                className={style.artistpic} 
                // id={style.coverimg}
                alt=""
              />
              <div className={style.artistdetails}>
                <h2 className={style.artistname}>Ranjit Gogoi</h2>
                <div className={style.artistwork}>
                  <h3>Bihu Samrat </h3>
                </div>
              </div>
              <Playcontrols />
            </div>
          )}
          {/*artist2 ends */}
          
          {/* artist 3 starts*/}
          <div className={`${style.indicard} ${style.indithree}`} onClick={handleHide7} id={style.hideup}>
            
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677668382/posua/top-card-part-removebg_nzcc0n.png"
              className={style.topcardimg}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668178/posua/left-card-part-removebg_ojv4ts.png"
              className={style.leftcardimg}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677668485/posua/right-card-part-removebg_yhebcv.png"
              className={style.rightcardimg}
              alt=""
            />
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677840229/posua/maxresdefault_uadj03.jpg"
              onMouseOver={(e) =>
                (e.currentTarget.src =
                  "https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_760,f_auto,fl_lossy/v1677840262/posua/218813-3934752606052f2e52d57b.webp_yez4ey.jpg")
              }
              onMouseOut={(e) =>
                (e.currentTarget.src =
                  "https://assets.sentinelassam.com/h-upload/c_scale,w_360,f_auto,fl_lossy/2021/04/14/218865-bihu.webp?w=940&dpr=1.3")
              }
              className={style.artistpic} id={style.coverimg}
              alt=""
            />
            <div className={style.artistdetails}>
              <h2 className={style.artistname}>Deusila Bihua Dol</h2>
              <div className={style.artistwork}>
                <h3>Band</h3>
              </div>
            </div>
            <Playcontrols />
          </div>
          {/*artist3 ends */}
        </div>
      )}

      {/*artist 1 deatisl starts*/}
      {toggle1 && (
        <div className={style.artistdetail} id={style.detailanimate}>
          <button className={style.btnleft} onClick={handleShow2}>
            <img
              className={style.imgcross}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.webp"
              alt=""
            />
          </button>
          <h1>Dikshu Sharma</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              Let us take a roam through ‘Dihinge disange dibange, pagaldiyar paarote’ as the beats Ghen gighen taak taak, ghen gighen taak taak. ghen gighen ,taak gighen taak gighen taak taak… make us sway along  ,altogether zestfully! Let the symphony of dhuliya ,nasoni ,their sweet melodies and graceful moves mesmerize you in the eventide of POSUA.<br/><br/>With the exuberance of Posua knocking at our doorsteps ,  buckle your seat belts for the most awaited and anticipated event of the evening . Get ready to sway to the melodious beats that 'Manthan' has to offer. The stage is all set to welcome renounced performers of Assam , rejuvenate the spirit on campus and provide us a night that will be cherished for years. The man of the night is one that needs no introduction. He is none other than Dikshu , whose music has touched the heart and soul of every Assamese.
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
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.webp"
              alt=""
            />
          </button>
          <h1>Ranjit Gogoi</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              শুকান ফাগুনৰ ৰুক্ষতাক আঁতৰাই বসন্তৰ প্ৰথমজাক বৰষুণে চৌদিশ জীপাল কৰি পেলাইছেহি। বৰষুণৰ ভিজা ভিজা পৰশত লাজুক লাজুক কৈ গছে কুঁহিপাত মেলাৰ সময়তে দূৰৈৰ পৰা ভাঁহি আহে বাঁহীৰ সুৰ, পেঁপাৰ মাত।<br/><br/>ঢোল-পেঁপা-গগনাৰ মাতেৰে ডেকা-গাভৰুৰ মন উন্মাদপূৰ্ণ কৰিবলৈ  অহা ৫ মাৰ্চ, ২০২৩ত এন.আই.টি শিলচৰৰ পদূলি শুৱনি কৰিবলৈ আহি আছে ঢোল বাদনৰ অন্যতম শিল্পী, বিশ্বৰ চুকে-কোণে ঢোল বাদন তথা বিহু প্ৰদৰ্শনেৰে মন আপ্লুত কৰা অসমীয়া কলা-সংস্কৃতিৰ সাধক, বিহু সম্ৰাট ৰঞ্জিত গগৈ আৰু তেওঁৰ সমাদৃত আকৰ্ষণীয় দলটো।<br/><br/>Isn’t your ‘Bihu boliya mon’ fueled with excitement, as the ‘Fagunor Posua’  sweeps through your doorstep? I bet you would have danced with joy if a ‘sinaki dhulor maat’ have greeted you with its hypnotizing rhythm at that moment!<br/><br/>“Ghen gighen taak taak, ghen gighen taak taak. ghen gighen ,taak gighen taak gighen taak taak…”<br/><br/>Then, why wait?!!! We are happy to announce that, on the auspicious day of Posua, our beloved Bihu Samrat Ranjit Gogoi and his hypnotizing band are arriving at our home, NIT Silchar to fill our hearts and soul with the mesmerizing sound of 'Dhul', 'Pepa', and 'Gogona', to rejuvenate our minds and may be to let us dance a little. Hoping to see you all!
            </h3>
          </div>
        </div>
      )}
      {/*artist 2 deatisl ends*/}

      {/*artist 3 deatisl starts*/}
      {toggle8 && (
        <div className={style.artistdetail} id={style.detailanimate}>
          <button className={style.btnleft} onClick={handleShow8}>
            <img
              className={style.imgcross}
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677494242/posua/WhatsApp_Image_2023-02-27_at_16.06.00-removebg-preview_xbd2fq.png"
              alt=""
            />
          </button>
          <h1>Deusila Bihua Dol</h1>
          <div className={style.aboutbha}>
            <h3>
              {" "}
              অসমৰ গাঁৱে-ভূঞে, চহৰে-নগৰে অসমীয়াৰ হুচৰিক মঞ্চত উপস্থাপন কৰি দৰ্শকৰ অপূৰ্ব খ্যাতি লাভ কৰিবলৈ সক্ষম হোৱা "দেউচিলা বিহুদল" আহি আজি এন. আই. টি. ৰ বাকৰি শুৱনি কৰিছেহি। এন. আই. টি. ৰ বিহুবলীয়া ৰাইজৰ মন প্ৰাণ জিনিবলৈ নিজৰ ঢোল, পেঁপা, গগনাৰ লগতে বিভিন্ন বাদ্যযন্ত্ৰৰ সুৰেৰে আপ্লুত কৰি তুলিবলৈ সাজু "দেউচিলা বিহুদল"।  ঢোলৰ চাপৰত হুঁচৰিৰ চেঁৱত আকৌ এবাৰ কঁকাল ভাঙি নাচিবলৈ, এতিয়া মাথোঁ  অপেক্ষা ৫ মাৰ্চ তাৰিখলৈ।<br/><br/>
              Spring has finally arrived, and the anticipation has culminated in the sounds of Bihu beats all around the corner. And with this, NIT Silchar is all set to host performance of 'Deusila Bihudol', a renowned folk  group whose mesmerizing shows have captivated audiences and made them groove to the beats of Bihu. Brace yourselves for a magnificent cultural event as 'Deusila Bihudal' takes the stage with their drums, pepas, gaganas and various other musical instruments, ready to win the hearts of many. Hoping to see you all there promptly!
            </h3>
          </div>
        </div>
      )}
      {/*artist 3 deatisl ends*/}
      <Flowerinout />
    </>
  );
};

export default UpcomingArtists;
