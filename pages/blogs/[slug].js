import React from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Blog.module.css";

const slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Title of the page {slug}</h1>
        <hr />
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          adipisci eos vitae, nesciunt, aut nulla ratione pariatur soluta,
          maxime harum in sequi distinctio eum dolor fuga eaque nostrum placeat
          fugiat natus alias voluptatem architecto. Rerum similique eius
          possimus praesentium repudiandae saepe error cumque ipsam. Obcaecati
          corporis minima neque laboriosam iste commodi id rerum. Consequatur
          eius quo et repudiandae reiciendis voluptate sapiente. Est dolores
          voluptatum excepturi voluptatibus esse suscipit delectus?
        </div>
      </main>
    </div>
  );
};

export default slug;
