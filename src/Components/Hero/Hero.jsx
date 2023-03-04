import React from "react";
import { useState } from "react";
import Styles from "./Hero.module.scss";
import { Blurhash } from "react-blurhash";

const Hero = (props) => {
  const [winWidth, setWinWidth] = useState(window.innerWidth);
  const { isLoaded, setIsLoaded } = props;

  const posua = document.getElementById("posua");
  console.log(posua);

  const placeholder = (
    <Blurhash hash="L3Lc^j?u*0fQ-mRjNGo0Zgivofae" width={200} height={200} punch={1} />
  );

  // const Image = ({ src, alt }) => (
  //   <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}}
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
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/sky.webp" alt="" className={Styles.sky} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677766625/posua/Untitled_Artwork-1_Compressed_jylpz7.webp"
          alt=""
          className={Styles.sky}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/clouds.webp" alt="" className={Styles.clouds} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768577/posua/clouds-min.png_vemjzj.webp"
          alt=""
          className={Styles.clouds}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/clouds-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677766958477" alt="" className={Styles.clouds} /> */}
        {/* <div className={Styles.posua}> */}
        {/* <div className={Styles.hero}> */}
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/sky.webp" alt="" className={Styles.sky} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677766625/posua/Untitled_Artwork-1_Compressed_jylpz7.webp"
          alt=""
          className={Styles.sky}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/clouds.webp" alt="" className={Styles.clouds} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768577/posua/clouds-min.png_vemjzj.webp"
          alt=""
          className={Styles.clouds}
        />
        {/* <div className={Styles.posua}> */}
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/posua.webp" alt="" className={Styles.posua} /> */}
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : !isLoaded?'4.5s !important':''}} */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: "4.5s !important" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768523/posua/posua-min.png_rqmadd.webp"
          alt=""
          id="posua"
          className={Styles.posua}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/posua-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677767129104" alt="" className={Styles.posua} /> */}

        {/* </div> */}
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/hills.webp" alt="" className={Styles.hills} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768672/posua/hills-min.png_vgj2d2.webp"
          alt=""
          className={Styles.hills}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="https://ik.imagekit.io/lbrdi6gxa/posua2023/hills-min.png?ik-sdk-version=javascript-1.4.3&updatedAt=1677767285402" alt="" className={Styles.hills} /> */}
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/pines.webp" alt="" className={Styles.pines} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768721/posua/Untitled_Artwork-8_Compressed-min.png_alzhch.webp"
          alt=""
          className={Styles.pines}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/whitish-bush.webp" alt="" className={Styles.whitishBush} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768790/posua/Untitled_Artwork-10_Compressed-min.png_alqhqv.webp"
          alt=""
          className={Styles.whitishBush}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/layer4.webp" alt="" className={Styles.layer4} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768835/posua/layer4-min.png_jztyxr.webp"
          alt=""
          className={Styles.layer4}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/layer3.webp" alt="" className={Styles.layer3} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768890/posua/layer3-min.png_mq22bj.webp"
          alt=""
          className={Styles.layer3}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/layer2.webp" alt="" className={Styles.layer2} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768946/posua/layer2-min.png_w8sruq.webp"
          alt=""
          className={Styles.layer2}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/layer1.webp" alt="" className={Styles.layer1} /> */}
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768991/posua/layer1-min.png_zu6lyb.webp"
          alt=""
          className={Styles.layer1}
        />
        {/* <img loading="lazy" placeholder={placeholder} style={{animationDelay : isLoaded?'4.5s !important':''}} src="/assets/Hero/bush.webp" alt="" className={Styles.bushInverted} /> */}
      </div>
      <div
        // src="/assets/Hero/bush.webp"
        alt=""
        className={winWidth > 800 ? Styles.bush : Styles.bush_mobile}
      >
        <img
          loading="lazy"
          placeholder={placeholder}
          style={{ animationDelay: isLoaded ? "4.5s !important" : "" }}
          src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677768382/posua/bush-min_dqh93w.webp"
          alt=""
        />
      </div>
    </>
  );
};

export default Hero;
