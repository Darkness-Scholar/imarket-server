import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iCategory {
    category_id?: string,
    category_name: string,
    category_image: string
}

export default class Category extends Model<iCategory> implements iCategory {
    category_id?: string
    category_name!: string
    category_image!: string
}

Category.init({
    category_id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    category_name: { type: DataTypes.STRING, allowNull: false },
    category_image: { type: DataTypes.STRING, allowNull: false }
}, { 
    sequelize: __database__, 
    modelName: 'Category', 
    timestamps: true, 
    tableName: 'categories'
})