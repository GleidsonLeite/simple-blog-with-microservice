const axios = require('axios').default

const queries = axios.create({
  baseURL: "http://localhost:4002"
})

module.exports = queries