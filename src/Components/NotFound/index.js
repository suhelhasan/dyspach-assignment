import React from "react";
import style from "./style.module.scss";
// import Image from "../../assets/404.png";

export default function index() {
  return (
    <div className={style["NotFound"]}>
      <img className={style["image"]} src='/assets/404.png' alt='image1' />
    </div>
  );
}
