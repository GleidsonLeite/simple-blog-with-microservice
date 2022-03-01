import React, { useState, useEffect } from "react"
import { postQueryApi } from "../../api/PostQueryApi"
import CommentCreate from "./components/CommentCreate"
import PostComments from "./components/PostComments"

export default () => {

  const [posts, setPosts] = useState({})

  const fetchPosts = async () => {
    const response = await postQueryApi.get("/posts")
    const { data:fetchedPosts } = response
    setPosts(fetchedPosts)
  }

  useEffect(() => {
    fetchPosts()
  }, [])


  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {Object.values(posts).map(post => (
        <div
          key={post.id}
          className="card"
          style={{
            width: "30%",
            marginBottom: "20px"
          }}
        >
          <div className="card-body">
            <h3>{post.title}</h3>
            <PostComments comments={post.comments}/>
            <CommentCreate postId={post.id}/>
          </div>
        </div>
      ))}
    </div>
  )
}