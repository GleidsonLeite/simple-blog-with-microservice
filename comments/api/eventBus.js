const axios = require("axios").default

const eventBus = axios.create({
  baseURL: "http://event-bus-srv:4005"
})

module.exports = eventBus