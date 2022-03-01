const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")
const cors = require("cors")
const eventBus = require("./api/eventBus")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get("/posts/:id/comments", (request, response) => {
  const postId = request.params.id

  response.send(commentsByPostId[postId] || [])
})

app.post("/posts/:id/comments", async (request, response) => {
  const commentId = randomBytes(4).toString("hex")
  const { content } = request.body
  
  const postId = request.params.id
  
  const createdComment = { 
    id: commentId,
    content,
    status: "pending"
  }

  const comments = commentsByPostId[postId] || []
  comments.push(createdComment)

  commentsByPostId[postId] = comments

  await eventBus.post("/events", {
    type: "CommentCreated",
    data: {
      ...createdComment,
      postId
    }
  })

  response.status(201).send(comments)
})

app.post("/events", async (request, response) => {
  console.log("Event Received", request.body.type)

  const { type, data } = request.body

  if(type==="CommentModerated"){
    const { postId, id, status, content } = data
    const comments = commentsByPostId[postId]
    const foundComment = comments.find(comment => comment.id === id)
    foundComment.status = status

    await eventBus.post("/events", {
      type: "CommentUpdated",
      data: {
        id,
        status,
        postId,
        content
      }
    })
  }

  response.send({})
})

app.listen(4001, () => {
  console.log("Listening on 4001")
})