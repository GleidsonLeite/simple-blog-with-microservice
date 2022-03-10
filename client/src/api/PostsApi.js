import axios from "axios"

const postApi = axios.create({
  baseURL: "http://posts.com"
})

export { postApi }