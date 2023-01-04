import express, { Request, Response, Router } from "express"
import ProductController from "../controllers/product.controller"
import Middleware from "../services/middleware.service"

const Product:Router = express.Router()

/** GET ALL PRODUCT **/
Product.get("/", ProductController.getProduct)
Product.post("/", ProductController.createProduct)
Product.put("/:product", ProductController.updateProduct)
Product.delete("/:product", ProductController.removeProduct)

export default Product