const { default: axios } = require("axios")

const eventBus = axios.create({
  baseURL: "http://eventbus:4005"
})

module.exports = eventBus