import React, { useState } from "react"
import { postCommentsApi } from "../../../../api/PostCommentsApi"

export default ({postId}) => {
  const [content, setContent] = useState("")

  const handleOnChange = (event) => {
    setContent(event.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault()
    await postCommentsApi.post(`/posts/${postId}/comments`, {
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