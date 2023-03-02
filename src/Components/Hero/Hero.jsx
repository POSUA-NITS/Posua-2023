import React from "react";
import { useState } from "react";
import Styles from "./Hero.module.scss";

const Hero = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth)
  const [winHeight, setWinHeight] = useState(window.innerHeight)

  document.getElementsByClassName("sky");
  document.getElementsByClassName("clouds");

  window.addEventListener('resize', () => {
    setWinWidth(window.innerWidth)
    setWinHeight(window.innerHeight)
  })

  return (
    <>
      <div className={winWidth > 800 && winHeight<winWidth ? Styles.hero : Styles.hero_mobile}>
        <img src="/assets/Hero/sky.png" alt="" className={Styles.sky} />
        <img src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} />
        {/* <div className={Styles.posua}> */}
        {/* <div className={Styles.hero}> */}
        <img src="/assets/Hero/sky.png" alt="" className={Styles.sky} />
        <img src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} />
        {/* <div className={Styles.posua}> */}
        {/* <div className={Styles.hero}> */}
        {/* <img src="/assets/Hero/sky.png" alt="" className={Styles.sky} /> */}
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677766625/posua/Untitled_Artwork-1_Compressed_jylpz7.png"
          alt=""
          className={Styles.sky}
        />
        {/* <img src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} /> */}
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768577/posua/clouds-min.png_vemjzj.png"
          alt=""
          className={Styles.clouds}
        />
        {/* <div className={Styles.posua}> */}
        {/* <img src="/assets/Hero/posua.png" alt="" className={Styles.posua} /> */}
        <img
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768523/posua/posua-min.png_rqmadd.png"
          alt=""
          className={Styles.posua}
        />
        {/* <img src="https://ik.imagekit.io/lbrdi6gxa/posua2023/posua-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677767129104" alt="" className={Styles.posua} /> */}

        {/* </div> */}
        <img src="/assets/Hero/hills.png" alt="" className={Styles.hills} />
        <img src="/assets/Hero/pines.png" alt="" className={Styles.pines} />
        <img src="/assets/Hero/whitish-bush.png" alt="" className={Styles.whitishBush} />
        <img src="/assets/Hero/layer4.png" alt="" className={Styles.layer4} />
        <img src="/assets/Hero/layer3.png" alt="" className={Styles.layer3} />
        <img src="/assets/Hero/layer2.png" alt="" className={Styles.layer2} />
        <img src="/assets/Hero/layer1.png" alt="" className={Styles.layer1} />
        {/* <img src="/assets/Hero/bush.png" alt="" className={Styles.bushInverted} /> */}
      </div>
      <div className={winWidth > 800 && winHeight<winWidth ? Styles.bush : Styles.bush_mobile}>
        <img src="/assets/Hero/bush.png" alt=""  />
      </div>
    </>
  );
};

export default Hero;
