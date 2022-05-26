import React from 'react'
import styles from "../styles/Home.module.css";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={styles.mainNav}>
    <ul>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a> 
      </Link>
      <Link href="/blog">
        <a>Blogs</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </ul>
  </nav>
  )
}

export default Nav