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

app.post("/posts", async (request, response) => {
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

app.listen(4000, () => {
  console.log("Listening on 4000")
})