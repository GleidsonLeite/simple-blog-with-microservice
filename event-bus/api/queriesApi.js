const axios = require('axios').default

const queries = axios.create({
  baseURL: "http://query-srv:4002"
})

module.exports = queries