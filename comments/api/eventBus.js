const axios = require("axios").default

const eventBus = axios.create({
  baseURL: "http://localhost:4005"
})

module.exports = eventBus