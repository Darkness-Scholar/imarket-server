import { Request, Response } from "express"
import database from "../../database";

interface iProduct {
    product_id: number,
    product_brand: string,
    product_name: string,
    product_image: string,
    product_description: string,
    product_price: number
}

/** @function getAllProduct --> Get all product */
export default function getAllProduct(req: Request, res: Response) : iProduct[] {
    return []
}