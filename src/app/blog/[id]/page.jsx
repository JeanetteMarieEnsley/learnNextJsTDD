import React from "react";
import style from "./page.module.css";
import Image from "next/image";
import { notFound } from 'next/navigation'

async function getData(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: 'no-store',
  });

  if(!res.ok) {
    return notFound();
  }

  return res.json();
}
// TODO: add test for new data fetching with params being for id

const BlogPost = async ({params}) => {
  const data = await getData(params.id)
  return (
    <div className={style.container}>
      <div className={style.top}>
        <div className={style.info}>
          <h1 className={style.title}> {data.title}</h1>
          <p className={style.desc}>
            This is a fake blog post. Nothing to see here. yet. Anyways this is
            a description.
          </p>
          <div className={style.author}>
            <Image
              src="/andrea.png"
              alt=""
              width={40}
              height={40}
              className={style.avatar}
            />
            <span className={style.username}>Andrea Pexel</span>
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
        <p className={style.text}>
          We need a recap by eod, cob or whatever comes first make it a priority
          you better eat a reality sandwich before you walk back in that
          boardroom driving the initiative forward. We need to future-proof this
          can we jump on a zoom I have zero cycles for this, and we're building
          the plane while we're flying it, or t-shaped individual manage
          expectations. Can you slack it to me? we need to future-proof this
          action item three-martini lunch, but green technology and climate
          change . Ultimate measure of success. Gain traction zeitgeist, and
          iâ€™ve been doing some research this morning and we need to better, so
          window-licker. We need to get all stakeholders up to speed and in the
          right place vertical integration, currying favour, so where the metal
          hits the meat. Land it in region horsehead offer, so usabiltiy, or
          this is a no-brainer, yet thinking outside the box, nor turn the ship,
          for can we jump on a zoom. Draw a line in the sand open door policy.
          Single wringable neck race without a finish line. Player-coach run it
          up the flagpole our competitors are jumping the shark, but going
          forward, but everyone thinks the soup tastes better after theyâ€™ve
          pissed in it.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
