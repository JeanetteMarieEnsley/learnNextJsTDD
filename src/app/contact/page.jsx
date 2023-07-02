import React from "react";
import style from "./page.module.css";
import Image from "next/image"
import contactImage from '../../../public/contact_us.png'

const Contact = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Let's keep in touch</h1>
      <div className={style.content}>
        <div className={style.imgContainer}>
            <Image src={contactImage} alt='contact image' fill={true} className={style.image} />
        </div>
     
        <form className={style.form}>
          <input type="text" placeholder="name" className={style.input} />
          <input type="text" placeholder="email" className={style.input} />
          <textarea className={style.textarea} placeholder="message" cols="30" rows="10"></textarea>
        </form>

      </div>
    </div>
  )
};

export default Contact;
