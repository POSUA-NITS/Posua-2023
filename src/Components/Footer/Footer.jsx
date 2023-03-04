import React from "react";
import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <ul>
          <li className={Styles.headings}>Contacts</li>
          <li>
            Name <a href="tel:+919876543210">+919876543210</a>
          </li>
          <li>
            Name <a href="tel:+919876543210">+919876543210</a>
          </li>
        </ul>
        <ul>
          <li className={Styles.headings}>Address</li>
          <li>
            <a
              href="https://www.google.com/maps/place/National+Institute+Of+Technology,+Silchar/@24.7577144,92.7901042,17z/data=!3m1!4b1!4m5!3m4!1s0x374e49dcb63bae9b:0x81efa836714a289b!8m2!3d24.7577144!4d92.7922929"
              rel="noreferrer"
              target="_blank"
            >
              NIT Road, Fakiratilla, Silchar, Assam 788010
            </a>{" "}
          </li>
        </ul>
        <ul>
          <li className={Styles.headings}>Social</li>
          <li className={Styles.linksmedia}>
            <a
              href="https://www.instagram.com/posua_nits/"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </li>
          <li className={Styles.linksmedia}>
            <a href="https://www.facebook.com/nitsposua" rel="noreferrer" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
        <ul>
          <li className={Styles.headings}>Mail</li>
          <li>
            <a href="mailto:posua@nits.ac.in">posua@nits.ac.in</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
