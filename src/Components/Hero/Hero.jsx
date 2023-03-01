import React from "react";
import Styles from "./Hero.module.scss";

const Hero = () => {
  document.getElementsByClassName("sky");
  document.getElementsByClassName("clouds");

  return (
    <>
      <div className={Styles.hero}>
        <img src="/assets/Hero/sky.png" alt="" className={Styles.sky} />
        <img src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} />
        {/* <div className={Styles.posua}> */}
        <img src="/assets/Hero/posua.png" alt="" className={Styles.posua} />

        {/* </div> */}
        <img src="/assets/Hero/hills.png" alt="" className={Styles.hills} />
        <img src="/assets/Hero/pines.png" alt="" className={Styles.pines} />
        <img src="/assets/Hero/whitish-bush.png" alt="" className={Styles.whitishBush} />
        <img src="/assets/Hero/layer4.png" alt="" className={Styles.layer4} />
        <img src="/assets/Hero/layer3.png" alt="" className={Styles.layer3} />
        <img src="/assets/Hero/layer2.png" alt="" className={Styles.layer2} />
        <img src="/assets/Hero/layer1.png" alt="" className={Styles.layer1} />
        <img src="/assets/Hero/bush.png" alt="" className={Styles.bush} />
        {/* <img src="/assets/Hero/bush.png" alt="" className={Styles.bushInverted} /> */}
      </div>
    </>
  );
};

export default Hero;
