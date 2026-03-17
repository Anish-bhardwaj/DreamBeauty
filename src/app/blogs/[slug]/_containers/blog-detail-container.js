"use client";

import React from "react";
import BlogDetail from "../_components/blog-detail";
import BlogNotFound from "../../_components/blog-not-found";

function BlogDetailContainer({ blog }) {
  if (!blog) {
    return <BlogNotFound />;
  }

  return <BlogDetail blog={blog} />;
}

export default BlogDetailContainer;
