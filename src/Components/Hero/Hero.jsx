import React from "react";
import { useState } from "react";
import Styles from "./Hero.module.scss";
import {Blurhash} from 'react-blurhash';



const Hero = () => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const placeholder = (
    <Blurhash
      hash="L3Lc^j?u*0fQ-mRjNGo0Zgivofae"
      width={200}
      height={200}
      punch={1}
    />
  );
  
  // const Image = ({ src, alt }) => (
  //   <img loading="lazy" placeholder={placeholder}
  //     src={src}
  //     alt={alt}
  //     loading="lazy"
  //     width={200}
  //     height={200}
  //     placeholder={placeholder}
  //   />
  // );
  
  document.getElementsByClassName("sky");
  document.getElementsByClassName("clouds");

  window.addEventListener("resize", () => {
    setWinWidth(window.innerWidth);
  });

  return (
    <>
      <div className={winWidth > 800 ? Styles.hero : Styles.hero_mobile}>
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/sky.png" alt="" className={Styles.sky} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677766625/posua/Untitled_Artwork-1_Compressed_jylpz7.png"
          alt=""
          className={Styles.sky}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768577/posua/clouds-min.png_vemjzj.png"
          alt=""
          className={Styles.clouds}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/clouds-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677766958477" alt="" className={Styles.clouds} /> */}
        {/* <div className={Styles.posua}> */}
        {/* <div className={Styles.hero}> */}
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/sky.png" alt="" className={Styles.sky} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677766625/posua/Untitled_Artwork-1_Compressed_jylpz7.png"
          alt=""
          className={Styles.sky}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/clouds.png" alt="" className={Styles.clouds} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768577/posua/clouds-min.png_vemjzj.png"
          alt=""
          className={Styles.clouds}
        />
        {/* <div className={Styles.posua}> */}
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/posua.png" alt="" className={Styles.posua} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768523/posua/posua-min.png_rqmadd.png"
          alt=""
          className={Styles.posua}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/posua-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677767129104" alt="" className={Styles.posua} /> */}

        {/* </div> */}
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/hills.png" alt="" className={Styles.hills} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768672/posua/hills-min.png_vgj2d2.png"
          alt=""
          className={Styles.hills}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/hills-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677767285402" alt="" className={Styles.hills} /> */}
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/pines.png" alt="" className={Styles.pines} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768721/posua/Untitled_Artwork-8_Compressed-min.png_alzhch.png"
          alt=""
          className={Styles.pines}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/whitish-bush.png" alt="" className={Styles.whitishBush} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768790/posua/Untitled_Artwork-10_Compressed-min.png_alqhqv.png"
          alt=""
          className={Styles.whitishBush}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/layer4.png" alt="" className={Styles.layer4} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768835/posua/layer4-min.png_jztyxr.png"
          alt=""
          className={Styles.layer4}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/layer3.png" alt="" className={Styles.layer3} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768890/posua/layer3-min.png_mq22bj.png"
          alt=""
          className={Styles.layer3}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/layer2.png" alt="" className={Styles.layer2} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768946/posua/layer2-min.png_w8sruq.png"
          alt=""
          className={Styles.layer2}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/layer1.png" alt="" className={Styles.layer1} /> */}
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768991/posua/layer1-min.png_zu6lyb.png"
          alt=""
          className={Styles.layer1}
        />
        {/* <img loading="lazy" placeholder={placeholder} src="/assets/Hero/bush.png" alt="" className={Styles.bushInverted} /> */}
      </div>
      <div
        // src="/assets/Hero/bush.png"
        alt=""
        className={winWidth > 800 ? Styles.bush : Styles.bush_mobile}
      >
        <img loading="lazy" placeholder={placeholder}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768382/posua/bush-min_dqh93w.png"
          alt="" />
      </div>
    </>
  );
};

export default Hero;
