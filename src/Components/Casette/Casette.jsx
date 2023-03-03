import React from "react";
import { useState } from "react";
import Styles from "./Casette.module.scss";

const Casette = (props) => {

  const {year,setYear} = props
  const [cdRotate,setCdRotate] = useState(0)

  return (
    <div style={Styles.casette}>
      <div className={Styles.casette_img}>
        <div className={Styles.casette_cd} style={{transform : `translateX(-50%) rotateZ(${cdRotate}deg)`}}>
          <div className={Styles.text}>{year}</div>
          <div className={Styles.text_bottom}>{year}</div>
          <img src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1677825417/posua2023/cd_zfjmad.webp" alt={year} className={Styles.cd} />
        </div>
        <div className={Styles.cassette_body}>
          <img src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1677827002/posua2023/cassete_body_jg5yxf.webp" alt="cassette" className={Styles.body} />
          <img src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1677821241/posua2023/button_left_gkghbz.webp" alt="" onClick={()=>{setYear(parseInt(year)-1); setCdRotate(cdRotate - 180)}} className={`${Styles.button_left} ${year<=2016?Styles.disabled:''}`} />
          <img src="https://res.cloudinary.com/dhgfsshq4/image/upload/v1677821241/posua2023/button_left_gkghbz.webp" alt="" onClick={()=>{setYear(parseInt(year)+1); setCdRotate(cdRotate + 180)}} className={`${Styles.button_right} ${year>=2022?Styles.disabled:''}`} />
        </div>
      </div>
    </div>
  );
};

export default Casette;
