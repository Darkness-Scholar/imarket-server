import { Request, Response } from "express"
import database from "../database"
import { ROLES } from "../constans"
import getAllProduct from "../components/product/getProduct"
import getProductById from "../components/product/getProductById"
import { ProductDTO } from "../dtos"

export default class ProductController {

    static getProduct (req: Request, res: Response) {
        let { product_id } = req.query
        if (!product_id) {
            getAllProduct(req, res)
        } else getProductById(req, res, Number(product_id))
    }

    static createProduct (req: Request, res: Response) {
        let user = req.user
        if (user.user_role !== "admin") return res.status(403).json({ msg: "Forbiden", data: null })
        let { product_brand, product_name, product_image, product_description, product_price } : ProductDTO = req.body
        
        if (
            !product_brand || !product_name || !product_image || !product_description || !product_price
        ) return res.status(400).json({ msg: "Fields are required", data: null })
        
        database.execute(`INSERT INTO royalplaza.products (product_brand, product_name, product_image, product_description, product_price) VALUES ("${product_brand}", "${product_name}", "${product_image}", "${product_description}", ${product_price})`,
            (error, result:any) => {
                if (error) {
                    console.log(error)
                    return res.status(500).json({ msg: "Internal Server Error" })
                }
                return res.status(200).json({ msg: "Success create product", data: null })
            }
        )
    }

    static updateProduct (req: Request, res: Response) {

    }

    static removeProduct (req: Request, res: Response) {

    }

}