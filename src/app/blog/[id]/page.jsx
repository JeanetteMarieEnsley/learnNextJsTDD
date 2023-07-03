import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    return notFound();
  }

  return res.json();
}
// TODO: add test for new data fetching with params being for id

export async function generateMetadata({ params }) {
  const post = await getData(params.id);
  return {
    title: post.title,
    description: post.desc,
  };
}

const BlogPost = async ({ params }) => {
  const data = await getData(params.id);
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}> {data.title}</h1>
          <p className={style.desc}>{data.desc}</p>
          <div className={style.author}>
            <Image
              src={data.image}
              alt=""
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>{data.username}</span>
          </div>
        </div>
        <div className={style.imageContainer}>
          <Image
            src="/computer.png"
            alt=""
            fill={true}
            className={style.image}
          />
        </div>
      </div>
      <div className={style.content}>
        <p className={style.text}>{data.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
