const axios = require('axios').default

const postCommentsApi = axios.create({
  baseURL: "http://comments:4001"
})

module.exports = postCommentsApi