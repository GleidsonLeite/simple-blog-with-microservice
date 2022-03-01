import axios from "axios"

const postQueryApi = axios.create({
  baseURL: "http://localhost:4002"
})

export { postQueryApi }