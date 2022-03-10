import React from "react";
import PostList from "./components/PostList";
import PostCreate from "./PostCreate";

export default () => {
  return (
    <div className="Container">
      <h1>Create Post!!!</h1>
      <PostCreate/>
      <hr/>
      <h1>Posts</h1>
      <PostList/>
    </div>
  )
}