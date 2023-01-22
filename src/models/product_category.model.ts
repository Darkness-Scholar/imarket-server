import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iProductCategory {
    product_id: string,
    category_id: string
}

class ProductCategory extends Model<iProductCategory> implements iProductCategory {
    product_id!: string
    category_id!: string
}

ProductCategory.init({
    product_id: { type: DataTypes.UUID, allowNull: false },
    category_id: { type: DataTypes.UUID, allowNull: false }
}, { 
    sequelize: __database__, 
    modelName: 'ProductCategory', 
    timestamps: true, 
    tableName: 'product_categories'
})

export default ProductCategory