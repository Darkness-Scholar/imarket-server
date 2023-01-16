import User from "../../models/user.model"
import { Op } from "sequelize"

interface iSearch {

    keyword: string,
    type: string,
    limit: number | string
}

export async function searchService ({ keyword, type, limit }:iSearch) {
    switch (type) {
        case 'user':
            let user = await User.findAll({
                where: {
                    [Op.or]: [
                        { name: {[Op.like]:`%${keyword}%`} },
                        { email: {[Op.like]:`%${keyword}%`}}
                    ]
                }, limit: 10
            })
            return user
        case 'product':
            return null
    }
}