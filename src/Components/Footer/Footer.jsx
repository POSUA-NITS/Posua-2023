import React from "react";
import Styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <ul>
          <li className={Styles.headings}>Contacts</li>
          <li className={Styles.contacts}>
            Dr. Lalit Chandra Saikia <a href="tel:+919435173835">+919435173835</a>{" "}
          </li>
          <li className={Styles.contacts}>
            Dr. Nabanita Adhikary <a href="tel:+919864428032">+919864428032</a>
          </li>
          <li className={Styles.contacts}>
            Jyotirmoy Haloi <a href="tel:+918876458563">+918876458563</a>
          </li>
          <li className={Styles.contacts}>
            Debanga Bikash Bora <a href="tel:+919678496566">+919678496566</a>
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
