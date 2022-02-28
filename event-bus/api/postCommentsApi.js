const axios = require('axios').default

const postCommentsApi = axios.create({
  baseURL: "http://localhost:4001"
})

module.exports = postCommentsApi