import React, { useEffect } from "react";
import style from './Error.module.scss'
import { Link } from 'react-router-dom'

const Error = () => {
  useEffect(() => {
    document.title = "404 | Posua 2023";
  }, []);
  return (
    <div className={style.notfnd}>
      <div className={style.txtntfnd}>
        <h1>404! Page not Found</h1>
      </div>
      <Link to="/" className={style.gohm}>Go Home</Link>
    </div>

  );
};

export default Error;
