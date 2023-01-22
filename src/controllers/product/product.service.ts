import Product from "../../models/product.model"
import User from "../../models/user.model"

export async function getProductById(product_id:string) {
    try {
        let products = await Product.findByPk(product_id)
        return products
    } catch (error) {
        return null
    }
}

export async function getAllProduct(page:string|number) {
    const LIMIT = 10
    try {
        let products = await User.findAll({
            limit: LIMIT, offset: 0 + (page - 1) * LIMIT
        })
        return products
    } catch (error) {
        return null
    }
}