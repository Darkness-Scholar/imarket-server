import { Model, DataTypes } from "sequelize"

interface iRolePermission {
    role_permission_id?: number,
    role_id: number,
    permission_id: number
}

class RolePermission extends Model<iRolePermission> implements iRolePermission {
    role_permission_id?: number
    role_id!: number
    permission_id!: number
}

RolePermission.init({
    role_permission_id: { type: DataTypes.NUMBER, autoIncrement: true, primaryKey: true },
    role_id: { type: DataTypes.NUMBER, allowNull: false },
    permission_id: { type: DataTypes.NUMBER, allowNull: false },
}, {
    sequelize: __database__,
    modelName: 'RolePermission',
    tableName: 'role_permissions'
})
