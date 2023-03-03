import React, { useEffect } from "react";
import { Header } from "../../Components/Header/Header";
import Accordion from "./Accordion";
import style from "./Sponsors.module.scss";
const Sponsors = () => {
  useEffect(() => {
    document.title = "Sponsors | Posua 2023";
  }, []);
  return (
    <>
      <div className={style.sponsorsmain}>
        <Header title="SPONSORS" fontSize="8vw" />

        <div className={style.sponsorssub}>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.jpg"
              alt=""
              className={style.bgspon}
            />
            <h1>CO-POWERED BY</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677707791/posua/WhatsApp_Image_2023-03-02_at_03.26.13_eykmsm.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.jpg"
              alt=""
              className={style.bgspon}
            />
            <h1>ASSOCIATE SPONSOR</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677707791/posua/WhatsApp_Image_2023-03-02_at_03.26.13_eykmsm.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.jpg"
              alt=""
              className={style.bgspon}
            />
            <h1>IN ASSOCIATION WITH</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677707791/posua/WhatsApp_Image_2023-03-02_at_03.26.13_eykmsm.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.jpg"
              alt=""
              className={style.bgspon}
            />
            <h1>CAFE PARTNER</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677707791/posua/WhatsApp_Image_2023-03-02_at_03.26.13_eykmsm.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
        </div>

        <div className={style.prevsponosr}>
          <h1>PREVIOUS SPONSORS</h1>
        </div>

        <div className={style.prevsponhlder}>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709374/posua/WhatsApp_Image_2023-03-02_at_03.46.44-min_wr4n6k.jpg"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709331/posua/WhatsApp_Image_2023-03-02_at_03.47.00-min_nuvlsu.jpg"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709297/posua/WhatsApp_Image_2023-03-02_at_03.47.08-min_it8wrq.jpg"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709263/posua/WhatsApp_Image_2023-03-02_at_03.47.16-min_ivaxyp.jpg"
              alt=""
            />
          </div>
        </div>

        <div className={style.moresponsors}>
          <div className={style.imgmoresponhlder}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709204/posua/WhatsApp_Image_2023-03-02_at_03.47.22-min_gy8z1r.jpg"
              alt=""
            />
          </div>
          <div className={style.teaoclk}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709119/posua/WhatsApp_Image_2023-03-02_at_03.47.30-min_x7ccri.jpg"
              alt=""
            />
          </div>
        </div>
        <Accordion />
      </div>
    </>
  );
};

export default Sponsors;
