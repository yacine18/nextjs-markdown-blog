import React from "react";
import Link from "next/link";
import Image from "next/image";

const Post = ({ post }) => {
  return (
    <div className="card">
      <Image
        src={post.frontmatter.cover_image}
        alt=""
        width="100%"
        height="50%"
        layout="responsive"
      />
      <div className="post-date">Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link className="btn" href={`/blog/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
};

export default Post;
