import Button from "../../../components/button/button";
import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import { items } from "./data";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

// TODO: test for data will change

const Category = ({ params }) => {
  //category in data is because of the folder [category]
  const data = getData(params.category);
  return (
    <div className={style.container}>
      <h1 className={style.catTitle}>{params.category}</h1>
      {data.map((item) => (
        <div className={style.item} key={item.id}>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
            <Button url="#" text="See More" />
          </div>
          <div className={style.imgContainer}>
            <Image fill={true} src={item.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;
