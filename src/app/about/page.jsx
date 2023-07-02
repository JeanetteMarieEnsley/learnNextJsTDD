import React from "react";
import Image from "next/image";
import education from "../../../public/about_banner.png";
import style from "./page.module.css";
import Button from "../../components/button/button";

const About = () => {
  const contents = [
    {
      id: 1,
      title: "About Us",
      description:
        "Lift and shift. Circle back granularity player-coach to be inspired is to become creative, innovative and energized we want this philosophy to trickle down to all our stakeholders cadence. Proceduralize agile, for locked and loaded we just need to put these last issues to bed, yet that's not on the roadmap. High-level. Can I just chime in on that one are we in agreeance cloud strategy personal development, sorry i didn't get your email, for staff engagement, for problem territories. Waste of resources hop on the bandwagon on your plate.",
    },
    {
      id: 2,
      title: "Goals to Achieve",
      description:
        "What do you feel you would bring to the table if you were hired for this position. Eat our own dog food slipstream. Who's responsible for the ask for this request? how much bandwidth do you have. Thinking outside the box we need to start advertising on social media, or big picture hit the ground running where do we stand on the latest client ask, yet the right info at the right time to the right people, and goalposts. Weaponize the data build on a culture of contribution and inclusion one-sheet, but don't over think it, for this is not the hill i want to die on.",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.imgContainer}>
        <Image
          fill={true}
          src={education}
          alt="education about banner"
          className={style.img}
        />
      </div>
      <div className={style.textContainer}>
        {contents.map((content) => {
          return (
            <div key={content.id} className={style.item}>
              <h1 className={style.title}>{content.title}</h1>
              <p className={style.desc}>{content.description}</p>
            </div>
          );
        })}
        <Button url="/contact" text="Contact" />
      </div>
    </div>
  );
};

export default About;
