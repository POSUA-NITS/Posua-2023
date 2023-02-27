import React from "react";
import Data from '../../Data/UpcomingArtists.json'
import style from './Artists.module.scss'
function UpcomingModal({ dataid }) {
    let content = "",
        title = "";
    for (const item of Data) {
        if (item.id === dataid) {
            title = item.title;
            content = item.content;
            break;
        }
    }

    return (
        <>
            {/* <div className="modalCard">
        <div className="profile_Card" key={dataid}>
          <div className="profile_2">
            <div className="img">
              <img src={imgsrc} alt="Profile of author" />
            </div>
          </div>
          <div className="modalRight">
            <div className="modalHead one">{head}</div>
            <div className="authHead two">{name}</div>
            <div className="content">{content}</div>
          </div>
        </div>
      </div> */}

            <div className="modalCard">
                <div className={style.modalartist} key={dataid}>
                    <div className={style.ttle}>
                        <h1>{title}</h1>
                    </div>
                    <div className={style.contentmodal}>
                        <h3>{content}</h3>
                    </div>
                </div>
            </div>
        </>
    );
}
export default UpcomingModal;
