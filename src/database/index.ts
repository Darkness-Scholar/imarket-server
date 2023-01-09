import { Sequelize } from "sequelize"

let __database__ = new Sequelize("idata", "root", "Tungl@ne69", {
    host: "127.0.0.1",
    dialect: "mysql"
})

export default __database__