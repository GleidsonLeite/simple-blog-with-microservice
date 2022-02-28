import axios from "axios"

const postCommentsApi = axios.create({
  baseURL: "http://localhost:4001"
})

export { postCommentsApi }