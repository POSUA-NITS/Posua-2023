import React from 'react'
import style from '../../Pages/Artists/Artists.module.scss'
const Title = (props) => {
  return (
   <>
    <div className={style.artistsmain}>
        <div className={style.animateposua}>
          <div className={style.redbg}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
              alt=""
            />
          </div>

          <div className={style.gmcha}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
              alt=""
            />
          </div>

          <div className={style.tabla}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
              alt=""
            />
          </div>

          <div className={style.flute}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
              alt=""
            />{" "}
          </div>
        </div>
        <div className={style.titleholderartist}>
          {" "}
          <h1 className={style.artismainh1}>{props.headtitle}</h1>
        </div>

        <div className={style.animateposua} id={style.right}>
          <div className={style.redbg}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677100739/posua/rd_bg_duat4m.png"
              alt=""
            />
          </div>

          <div className={style.gmcha}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128222/posua/gmcha_nobg_fqin50.png"
              alt=""
            />
          </div>

          <div className={style.tabla}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128053/posua/tabla-nobg_my9jwi.png"
              alt=""
            />
          </div>

          <div className={style.flute}>
            <img
              src="https://res.cloudinary.com/dp92qug2f/image/upload/v1677128156/posua/flute-nobg_mggx4t.png"
              alt=""
            />{" "}
          </div>
        </div>
      </div>
   </>
  )
}

export default Title