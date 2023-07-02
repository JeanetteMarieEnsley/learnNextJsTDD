import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import contactImage from "../../../public/contact_us.png";
import Button from "../../components/button/button";

const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let's keep in touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
          <Image
            src={contactImage}
            alt="contact image"
            fill={true}
            className={style.image}
          />
        </div>

        <form className={style.form}>
          <input type="text" placeholder="Name" className={style.input} />
          <input type="text" placeholder="Email" className={style.input} />
          <textarea
            className={style.textarea}
            placeholder="So what's the sitch?"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
