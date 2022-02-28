const axios = require('axios').default

const postApi = axios.create({
  baseURL: "http://localhost:4000"
})

module.exports = postApi