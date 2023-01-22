import express from "express"
import ProductController from "./product.controller"

const product = express.Router()

product.get("/" /*query:{ id, page }*/, ProductController.getProduct)
product.post("/", ProductController.createProduct)