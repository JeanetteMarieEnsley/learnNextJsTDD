import React from 'react'
import Link from 'next/link'

const Navbar = () => {

    const links = [
        {
            id: 1,
            text: "Home",
            href: "/",
        },
        {
            id: 2,
            text: "Portfolio",
            href: "/portfolio",
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
        }
       
    ]

    return (
        <div>
            {links.map((link) => {
                return (
                    <div key={link.id}>
                        <Link href={link.href}>{link.text}</Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Navbar
