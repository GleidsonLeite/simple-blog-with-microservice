import React, { useState } from "react"
import { postApi } from "./api/PostsApi"


export default () => {

  const [title, setTitle] = useState("")

  const handleOnInputChange = (event) => {
    setTitle(event.target.value)
  }

  const handleOnSubmit = async (event) => {
    event.preventDefault("")
    await postApi.post("/posts", {
      title
    })
    setTitle("")
  }

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input value={title} onChange={handleOnInputChange} className="form-control"/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}