import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={style.mainContainer}>
      <Link
        data-testid="blog_link"
        href="/blog/testid"
        className={style.container}
      >
        <div className={style.imageContainer}>
          <Image
            src="/productive.png"
            alt="productive"
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>Being productive during the workday</h1>
          <p className={style.desc}>
            Sticky notes are everywhere, but I think I got most of the todos
            done
          </p>
        </div>
      </Link>

      <Link href="#" className={style.container}>
        <div className={style.imageContainer}>
          <Image
            src="/corgi.png"
            alt=""
            width={400}
            height={250}
            className={style.image}
          />
        </div>
        <div className={style.content}>
          <h1 className={style.title}>What in the Freaky Friday?</h1>
          <p className={style.desc}>
            {" "}
            You're most likely wondering how we got here.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
