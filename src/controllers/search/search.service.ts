import User from "../../models/user.model"
import Product from "../../models/product.model"
import { Op } from "sequelize"

interface iSearch {

    keyword: string,
    type: string,
    limit: number | string
}

export async function searchService({ keyword, type, limit }: iSearch) {
    switch (type) {
        case 'user':
            let users = await User.findAll({
                where: {
                    [Op.or]: [
                        { name: { [Op.like]: `%${keyword}%` } },
                        { email: { [Op.like]: `%${keyword}%` } }
                    ]
                }, limit: 10
            })
            return users
        case 'product':
            let products = await Product.findAll({
                where: {
                    product_name: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            })
            return products
        default:
            return null
    }
}