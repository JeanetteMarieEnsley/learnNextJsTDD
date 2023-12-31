import React from "react";
import style from "./page.module.css";
import Link from "next/link";

const Quest = () => {
  const quests = [
    {
      id: 1,
      href: "/quest/frontend",
      title: "Frontend Quest",
      url: "/frontend.png",
    },
    {
      id: 2,
      href: "/quest/backend",
      title: "Backend Quest",
      url: "binary.png",
    },
    {
      id: 3,
      href: "/quest/testing",
      title: "Testing Quest",
      url: "/computer.png",
    },
    {
      id: 4,
      href: "/quest/cloud",
      title: "Cloud Quest",
      url: "/cloud.png",
    },
    {
      id: 5,
      href: "/quest/AI",
      title: "Gen AI Quest",
      url: "/ai-technology.png",
    },
  ];

  return (
    <div className={style.containter}>
      <h1 className={style.selectTitle}>Choose your Quest</h1>
      <div className={style.items}>
        {quests.map((quest) => {
          return (
            <Link
              style={{ backgroundImage: `url(${quest.url})` }}
              href={quest.href}
              key={quest.id}
              className={style.item}
            >
              <div className={style.title}>{quest.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Quest;
