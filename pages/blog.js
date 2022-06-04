import React, { useEffect, useState } from "react";
import styles from "../styles/Blog.module.css";
import Link from "next/link";

// Step 1: Collect all the files from blogdata directory
// Step 2: Iterate through the and Display them

const Blog = (props) => {
  console.log(props);
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {

  // }, [])
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

export async function getServerSideProps(context) {
  let data = await fetch("http://localhost:3000/api/blogs");
  let allBlogs = await data.json();

  return {
    props: { allBlogs }, // will be passed to the page component as props
  };
}

export default Blog;
