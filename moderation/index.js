const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")
const eventBus = require("./api/eventBus")

const app = express()
app.use(bodyParser.json())

app.post("/events", async (request, response) => {
  const { type, data } = request.body

  if(type==="CommentCreated"){
    const status = data.content.includes("orange") ? "rejected" : "approved"
    await eventBus.post("/events", {
      type: "CommentModerated",
      data: {
        postId: data.postId,
        id: data.id,
        status,
        content: data.content
      }
    })
  }

  response.send({})
})

app.listen(4003, () => {
  console.log("Listening on 4003")
})