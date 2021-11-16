import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Header from 'next/head'
import Link from "next/link";
import Image from "next/image";

const Post = ({ slug, frontmatter: { title, date, cover_image }, content }) => {
  return (
    <>
    <Header>
      <title>{title}</title>
    </Header>
      <Link href="/">
        <a className="btn btn-back">Go Back</a>
      </Link>
      <div className="card card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <Image
          src={cover_image}
          alt=""
          width="100"
          height="50"
          layout="responsive"
        />
        <div className="post-body">
          <div>{content}</div>
        </div>
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
}

export default Post;
