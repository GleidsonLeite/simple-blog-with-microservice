const {default:axios} = require("axios")

const moderationApi = axios.create({
  baseURL: "http://moderation:4003"
})

module.exports = moderationApi