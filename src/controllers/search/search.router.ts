import express from "express"
import SearchController from "./search.controller"
const search = express.Router()

search.get("/", SearchController.search)

export default search