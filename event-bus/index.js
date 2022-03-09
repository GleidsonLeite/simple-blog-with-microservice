const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const postApi = require("./api/postsApi")
const postCommentsApi = require("./api/postCommentsApi")
const queriesApi = require("./api/queriesApi")
const moderationApi = require("./api/moderationApi")

const app = express()
app.use(bodyParser.json())
app.use(cors())

const events = [];

app.post("/events", (request, response) => {
  const event = request.body;

  events.push(event)

  postApi.post("/events", event)
  // postCommentsApi.post("/events", event)
  // queriesApi.post("/events", event)
  // moderationApi.post("/events", event)

  response.send({ status: "OK" })
})

app.get("/events", (request, response) => {
  response.send(events)
})

app.listen(4005, () => {
  console.log("Listening on 4005")
})