import React, { useEffect } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

const blog = () => {
  useEffect(() => {
    console.log("useEffect has been sucessfully hit the blog page");
    fetch("http://localhost:3000/api/blogs")
      .then((a) => {
        return a.json();
      })
      .then((parsed) => {
        console.log(parsed);
      });
  });

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className="blogs">
          <div>
            <Link href={"/blogs/how-to-learn-html"}>
              <h3 className={styles.blogItemh3}>How to learn HTML in 2022?</h3>
            </Link>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
          <div>
            <Link href={"/blogs/how-to-learn-css"}>
              <h3 className={styles.blogItemh3}>How to learn CSS in 2022?</h3>
            </Link>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
          <div>
            <Link href={"/blogs/how-to-learn-javascript"}>
              <h3 className={styles.blogItemh3}>
                How to learn JavaScript in 2022?
              </h3>
            </Link>
            <p>HTML is the body of website! lets learn it.</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default blog;
