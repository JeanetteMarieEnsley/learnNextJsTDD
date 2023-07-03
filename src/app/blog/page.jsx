import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// TODO: add test for data function
async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();
  return (
    <div className={style.mainContainer}>
      {data.map((item) => (
        <Link
          key={item.id}
          data-testid="blog_link"
          href={`/blog/${item._id}`}
          className={style.container}
        >
          <div className={style.imageContainer}>
            <Image
              src={item.image}
              alt="productive"
              width={400}
              height={250}
              className={style.image}
            />
          </div>
          <div className={style.content}>
            <h1 className={style.title}>{item.title}</h1>
            <p className={style.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
