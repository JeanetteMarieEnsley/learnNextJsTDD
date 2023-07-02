import React from "react";
import enchanted_book from "../../public/enchanted_book.png";
import style from "./page.module.css";
import Image from "next/image";
import Button from "../components/button/button"

export default function Home() {
  return (
    <div className={style.container}>
      <div className={style.item}>
        <h1 className={style.title}>Hello Adventurer</h1>
        <p className={style.desc}>
          Are you ready to embark on your quest for Knowledge? Pick a path to
          follow and make sure to add your findings. Together we can level up
          our programming skills and rise up the ranks.
        </p>
        <Button url='/portfolio' text='Pick your Quest' />
      </div>
      <div className={style.item}>
        <Image
          width={575}
          height={500}
          src={enchanted_book}
          alt="enchanted book"
          className={style.img}
        />
      </div>
    </div>
  );
}
