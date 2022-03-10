import React, { useState } from "react"
import { postApi } from "../../../../api/PostsApi"

export default ({postId}) => {
  const [content, setContent] = useState("")

  const handleOnChange = (event) => {
    setContent(event.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    await postApi.post(`/posts/${postId}/comments`, {
      content
    })
    setContent("")
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label htmlFor="">New Comment</label>
          <input 
            type="text"
            className="form-control"
            value={content}
            onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}