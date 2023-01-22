import { Model, DataTypes } from "sequelize"

interface iRole {
    role_id?: number,
    role_name: string
}

class Role extends Model<iRole> implements iRole {
    role_id?: number
    role_name!: string
}

Role.init({
    role_id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    role_name: { type: DataTypes.STRING, allowNull: false }
}, {
    sequelize: __database__,
    modelName: 'Role',
    tableName: 'roles'
})