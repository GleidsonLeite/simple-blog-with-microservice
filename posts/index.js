const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require("crypto")
const cors = require("cors")
const axios = require("axios")
const eventBus = require("./api/eventBus")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const posts = {}

app.get("/posts", (request, response) => {
  response.send(posts)
})

app.post("/posts/create", async (request, response) => {
  const id = randomBytes(4).toString("hex")
  const { title } = request.body

  const createdPost = {
    id, title
  }

  posts[id] = createdPost

  await eventBus.post("/events", {
    type: "PostCreated",
    data: createdPost
  })

  response.status(201).send(posts[id])
})

app.post("/events", (request, response) => {
  console.log("Received Event", request.body.type)

  response.send({})
})

app.listen(4000, () => {
  console.log("v55")
  console.log("Listening on 4000")
})