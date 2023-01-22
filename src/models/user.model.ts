import { Model, DataTypes, UUIDV4 } from "sequelize"
import __database__ from "../database"

interface iUser {
    user_id?: string,
    name: string,
    email: string,
    password: string,
    is_active?: boolean,
}

class User extends Model<iUser> implements iUser {

    user_id?: string;
    name!: string;
    email!: string;
    password!: string;
    is_active?: boolean;

    static associate(models: any) {
        User.belongsToMany(models.Project, {
            through: 'ProjectAssignments'
        })
    }
}

User.init({
    user_id: { type: DataTypes.UUID, defaultValue: UUIDV4, allowNull: false, primaryKey: true },
    name: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    is_active: { type: DataTypes.BOOLEAN, defaultValue: true },
}, { 
    sequelize: __database__, 
    modelName: 'User', 
    timestamps: true, 
    tableName: 'users'
})

export default User