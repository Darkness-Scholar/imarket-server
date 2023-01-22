import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iUserRole {
    user_role_id?: number,
    user_id: string,
    role_id: number,
}

class UserRole extends Model<iUserRole> implements iUserRole {
    user_role_id?: number
    user_id!: string
    role_id!: number
}

UserRole.init({
    user_role_id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    user_id: { type: DataTypes.STRING, allowNull: false },
    role_id: { type: DataTypes.NUMBER, allowNull: false }
}, { 
    sequelize: __database__, 
    modelName: 'UserRole', 
    timestamps: false,
    tableName: 'user_roles'
})