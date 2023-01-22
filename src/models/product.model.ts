import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iProduct {
    product_id?: string,
    product_name: string,
    product_description: string,
    product_price: number,
    product_image: string
}

export default class Product extends Model<iProduct> implements iProduct {
    product_id?: string;
    product_name!: string;
    product_description!: string;
    product_price!: number;
    product_image!: string;
}

Product.init({
    product_id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    product_name: { type: DataTypes.STRING, allowNull: false },
    product_description: { type: DataTypes.STRING, allowNull: false },
    product_price: { type: DataTypes.NUMBER, allowNull: false },
    product_image: { type: DataTypes.STRING, allowNull: true }
}, { 
    sequelize: __database__, 
    modelName: 'Product', 
    timestamps: true, 
    tableName: 'products'
})