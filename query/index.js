const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const eventBus = require("./api/eventBusApi")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

const handleEvents = ({type, data}) => {
  if (type==="PostCreated"){
    const { id, title } = data;
    posts[id] = {id, title, comments: []}
  }

  if (type==="CommentCreated"){
    const { id, content, postId, status } = data

    const post = posts[postId]
    post.comments.push({
      id, content, status
    })
  }

  if (type==="CommentUpdated"){
    const { id, content, postId, status } = data

    const post = posts[postId]
    const foundComment = post.comments.find(comment => comment.id === id)

    foundComment.status = status
    foundComment.content = content
  }
}

app.get("/posts", (request, response) => {
  response.send(posts)
})

app.post("/events", (request, response) => {
  const { type, data } = request.body
  handleEvents({
    data,
    type
  })
  response.send({})
})

app.listen(4002, async () => {
  console.log("Listening on 4002")

  const response = await eventBus.get("/events")

  for (const event of response.data){
    console.log(`Processing event: ${event.type}`)
    handleEvents({
      data: event.data,
      type: event.type
    })
  }
})