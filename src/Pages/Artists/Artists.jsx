import React, { useEffect } from "react";
import style from "./Artists.module.scss";
import UpcomingArtists from "./UpcomingArtists";
import PreviousArtists from "./PreviousArtists";
import Scrolling from "./Scrolling";
const Artists = () => {
  useEffect(() => {
    document.title = "Artists | Posua 2023";
  }, []);
  return (
    <>
      <div className={style.artists}>
        <UpcomingArtists />
        <PreviousArtists />
        {/* <PreviousArtists /> */}
        {/* <Scrolling> </Scrolling> */}
      </div>
    </>
  );
};

export default Artists;
