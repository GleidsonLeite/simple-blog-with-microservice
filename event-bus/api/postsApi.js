const axios = require('axios').default

const postApi = axios.create({
  baseURL: "http://posts:4000"
})

module.exports = postApi