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
        <Header title="SPONSORS" fontSize="6vw" />

        <div className={style.sponsorssub}>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.webp"
              alt=""
              className={style.bgspon}
            />
            <h1>CO-POWERED BY</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709263/posua/WhatsApp_Image_2023-03-02_at_03.47.16-min_ivaxyp.jpg"
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
            <h1>MEDIA PARTNER</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709204/posua/WhatsApp_Image_2023-03-02_at_03.47.22-min_gy8z1r.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.webp"
              alt=""
              className={style.bgspon}
            />
            <h1>PARTNER</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677788066/posua/WhatsApp_Image_2023-03-03_at_01.43.51_fii7g5.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.webp"
              alt=""
              className={style.bgspon}
            />
            <h1>PARTNER</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677861016/posua/WhatsApp_Image_2023-03-03_at_21.58.22-min_nlmihj.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.webp"
              alt=""
              className={style.bgspon}
            />
            <h1>PARTNER</h1>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677861393/posua/WhatsApp_Image_2023-03-03_at_21.58.36-min_wqi6xp.jpg"
              alt=""
              className={style.cubeimg}
            />
          </div>
          <div className={style.assospon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677706662/posua/WhatsApp_Image_2023-03-02_at_03.06.57_u0vspw.jpg"
              alt=""
              className={style.bgspon}
            />
            <h1>PARTNER</h1>
            {/* <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677707791/posua/WhatsApp_Image_2023-03-02_at_03.26.13_eykmsm.jpg"
              alt=""
              className={style.cubeimg}
            /> */}
            {/* <h2 className={style.cubeimg1}>Makhani Gravy</h2> */}
            <h2 className={style.cubeimg2}>FPS Shop No.3</h2>
            {/* <h2 className={style.cubeimg3}>Kitchen 2.0</h2> */}
            {/* <h2  className={style.cubeimg}>Makhani Gravy</h2> */}
          </div>
        </div>

        <div className={style.prevsponosr}>
          <h1>PREVIOUS SPONSORS</h1>
        </div>

        <div className={style.prevsponhlder}>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709374/posua/WhatsApp_Image_2023-03-02_at_03.46.44-min_wr4n6k.webp"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709331/posua/WhatsApp_Image_2023-03-02_at_03.47.00-min_nuvlsu.webp"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709297/posua/WhatsApp_Image_2023-03-02_at_03.47.08-min_it8wrq.webp"
              alt=""
            />
          </div>
          <div className={style.imgprespon}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709263/posua/WhatsApp_Image_2023-03-02_at_03.47.16-min_ivaxyp.webp"
              alt=""
            />
          </div>
        </div>

        <div className={style.moresponsors}>
          <div className={style.imgmoresponhlder}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709204/posua/WhatsApp_Image_2023-03-02_at_03.47.22-min_gy8z1r.webp"
              alt=""
            />
          </div>
          <div className={style.teaoclk}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/c_scale,w_360,f_auto,fl_lossy/v1677709119/posua/WhatsApp_Image_2023-03-02_at_03.47.30-min_x7ccri.webp"
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
