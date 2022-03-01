import React, { useCallback } from "react"

export default ({ comments }) => {
  
  const getCommentContent = useCallback((comment) => {
    const commentContents = {
      approved: comment.content,
      pending: "This comment is awaiting moderation",
      rejected: "This comment has been rejected"
    }
    return commentContents[comment.status]
  }, [])

  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>{getCommentContent(comment)}</li>
        ))}
      </ul>
    </div>
  )
}