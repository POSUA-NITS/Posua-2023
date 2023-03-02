import React, { useEffect, useState } from "react";
import style from './index.module.scss'
import { useWindowScroll } from "react-use";
import { AiOutlineArrowUp } from 'react-icons/ai';
const ScrollToTop = () => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState(false);
  useEffect(() => {
    if (pageYOffset > 400) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset]);
  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  if (!visible) {
    return false;
  }
  return (
    <div
      className={style.scrolltotop}
      onClick={ScrollToTop}
    >
      <center>
        {/* <i className="icon fas fa-chevron-up"></i> */}
        <AiOutlineArrowUp className={style.icon} size={20} />
      </center>
    </div>
  );
};
export default ScrollToTop;
