const axios = require('axios').default

const queries = axios.create({
  baseURL: "http://query:4002"
})

module.exports = queries