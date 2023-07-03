import Button from "../../../components/button/button";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>Desc</p>
          <Button url="#" Text="See More"></Button>
        </div>
        <div className={style.imgContainer}>
          <Image fill={true} src="" alt="" />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>Desc</p>
          <Button url="#" Text="See More"></Button>
        </div>
        <div className={style.imgContainer}>
          <Image fill={true} src="" alt="" />
        </div>
      </div>
      <div className={style.item}>
        <div className={style.content}>
          <h1 className={style.title}>test</h1>
          <p className={style.desc}>Desc</p>
          <Button url="#" Text="See More"></Button>
        </div>
        <div className={style.imgContainer}>
          <Image fill={true} src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Category;
