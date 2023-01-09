import React from "react";
import Link from "next/link";
import styles from "../styles/Card.module.css";
import Image from "next/image";
function BlogCard({ title, author, coverPhoto, dataPublished, slug }) {
  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imgContainer}>
          <Image
            width={100}
            height={50}
            loading="lazy"
            src={coverPhoto.url}
            alt=""
          />
        </div>
      </Link>
      <div className={styles.text}>
        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <Image
              loading="lazy"
              width={20}
              height={20}
              src={author.avatar.url}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
