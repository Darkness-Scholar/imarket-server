import { Request, Response } from "express"
import { getProductById, getAllProduct } from "./product.service"

export default class ProductController {
    static getProduct = async (req: Request, res: Response) => {
        // GET PRODUCT BY ID AND GET ALL PRODUCT
        try {
            let { id, page } = req.query
            if (id) {
                let data = await getProductById(id)
                return data ? res.status(200).json(data) : res.status(404).json({message:"Data is not found"})
            }; if (page) {
                let data = await getAllProduct(page)
                return data ? res.status(200).json(data) : res.status(404).json({message:"Data is not found"})
            }
        } catch (error) {
            return res.status(500)
        }
    }

    static createProduct = async (req: Request, res: Response) => {
        try {
            
        } catch (error) {

        }
    }

    static updateProduct = async (req: Request, res: Response) => {
        try {
            let { id } = req.params // product_id
            let { product_name, product_description, product_price, product_image } = req.body
            let action = await Product.update({
                ...(!!product_name && { product_name }),
                ...(!!product_description && { product_description }),
                ...(!!product_price && { product_price }),
                ...(!!product_image && { product_image })
            }, where:{
                product_id:id
            })
        } catch (error) {

        }
    }
}