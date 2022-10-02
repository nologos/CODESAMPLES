import React from "react";
import Post from "./Post";

const Posts = () => {
  return (
    <div className="container">
      <h1>Test database results</h1>
      <h4>served from private azure mongoDB</h4>
      <Post />
    </div>
  );
};

export default Posts;
