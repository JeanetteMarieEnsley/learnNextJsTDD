import Image from "next/image";
import React from "react";
import style from "./footer.module.css";

const Footer = () => {
  const links = [
    {
      id: 1,
      src: "/facebook.png",
      alt: "facebook",
    },
    {
      id: 2,
      src: "/instagram.png",
      alt: "instagram",
    },
    {
      id: 3,
      src: "/twitter.png",
      alt: "twitter",
    },
    {
      id: 4,
      src: "/youtube.png",
      alt: "youtube",
    },
  ];
  return (
    <div className={style.container}>
      <div>@2023 Enchanted Docs. All rights reserved</div>
      <div className={style.social}>
        {links.map((link) => {
          return (
            <Image
              width={15}
              height={15}
              key={link.id}
              className={style.icon}
              src={link.src}
              alt={link.alt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
