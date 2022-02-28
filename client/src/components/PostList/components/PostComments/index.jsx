import React, {useState, useEffect} from "react"
import { postCommentsApi } from "../../../../api/PostCommentsApi"

export default ({postId}) => {
  const [comments, setComments] = useState([])

  const fetchData = async () => {
    const response = await postCommentsApi.get(`/posts/${postId}/comments`)
    
    setComments(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </div>
  )
}