const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")
const cors = require("cors")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get("/posts/:id/comments", (request, response) => {
  const postId = request.params.id

  response.send(commentsByPostId[postId] || [])
})

app.post("/posts/:id/comments", (request, response) => {
  const commentId = randomBytes(4).toString("hex")
  const { content } = request.body
  
  const postId = request.params.id
  
  const comments = commentsByPostId[postId] || []
  comments.push({ id: commentId, content })

  commentsByPostId[postId] = comments

  response.send(201).send(comments)
})

app.listen(4001, () => {
  console.log("Listening on 4001")
})