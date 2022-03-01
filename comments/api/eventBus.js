const axios = require("axios").default

const eventBus = axios.create({
  baseURL: "http://eventbus:4005"
})

module.exports = eventBus