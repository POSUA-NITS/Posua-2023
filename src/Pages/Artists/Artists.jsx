import React, { useEffect } from "react";
import style from "./Artists.module.scss";
import UpcomingArtists from "./UpcomingArtists";
import PreviousArtists from "./PreviousArtists";
const Artists = () => {
  useEffect(() => {
    document.title = "Artists | Posua 2023";
  }, []);
  return (
    <>
      <div className={style.artists}>
        <UpcomingArtists />
        <PreviousArtists />
      </div>
    </>
  );
};

export default Artists;
