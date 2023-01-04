import { Request, Response } from "express"
import database from "../../database";

interface iProduct {
    product_id: string,
    product_brand: string,
    product_name: string,
    product_image: string,
    product_description: string,
    product_price: number
}

/** @function getProductById --> Get product by product id */
export default function getProductById (req: Request, res: Response, product_id:number) {
    database.execute(`SELECT * FROM royalplaza.products WHERE product_id="${product_id}"`, (error, result:any) => {
        if (error) return res.status(500).json({ msg: "Error", data:null })
        if (!result) return res.status(404).json({ msg: "Data not found", data:null })
        return res.status(200).json({ msg: "Data not found", data:result })
    })
}