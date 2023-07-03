import React from "react";
import Link from "next/link";
import style from "./navbar.module.css";
// import DarkModeToggle from "../darkModeToggle/DarkModeToggle";
const Navbar = () => {
  const links = [
    {
      id: 1,
      text: "Home",
      href: "/",
    },
    {
      id: 2,
      text: "Quest",
      href: "/quest",
    },
    {
      id: 3,
      text: "Blog",
      href: "/blog",
    },
    {
      id: 4,
      text: "About",
      href: "/about",
    },
    {
      id: 5,
      text: "Contact",
      href: "/contact",
    },
    {
      id: 6,
      text: "Dashboard",
      href: "/dashboard",
    },
  ];

  return (
    <div className={style.container}>
      <Link href="/" className={style.logo}>
        Enchanted Docs
      </Link>
      <div className={style.links}>
        {/* <DarkModeToggle /> */}
        {links.map((link) => {
          return (
            <Link key={link.id} href={link.href} className={style.link}>
              {link.text}
            </Link>
          );
        })}
        <button className={style.logout}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
