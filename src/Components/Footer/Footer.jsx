import React from 'react'
import Styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={Styles.footer}>
      <div className={Styles.container}>
        <ul>
          <li className={Styles.headings}>Contacts</li>
          <li>Name +919876543210</li>
          <li>Name +919876543210</li>
        </ul>
        <ul>
          <li className={Styles.headings}>Address</li>
          <li>NIT Road, Fakiratilla, Silchar, Assam 788010</li>
        </ul>
        <ul>
          <li className={Styles.headings}>Social</li>
          <li>Instagram</li>
          <li>Facebook</li>
        </ul>
        <ul>
          <li className={Styles.headings}>Mail</li>
          <li>Posua@example.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
