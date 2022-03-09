const axios = require('axios').default

const postApi = axios.create({
  baseURL: "http://posts-clusterip-srv:4000"
})

module.exports = postApi