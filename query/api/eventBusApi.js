const { default: axios } = require("axios")

const eventBus = axios.create({
  baseURL: "http://event-bus-srv:4005"
})

module.exports = eventBus