import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iPermission {
    permission_id?: number,
    permission_name: string
}

class Permission extends Model<iPermission> implements iPermission {
    permission_id?: number
    permission_name!: string
}

Permission.init({
    permission_id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    permission_name: { type: DataTypes.STRING, allowNull: false }
}, {
    sequelize: __database__,
    modelName: 'Permission',
    tableName: 'permissions'
})