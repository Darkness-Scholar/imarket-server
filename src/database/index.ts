import mySQL from "mysql2"

const database = mySQL.createPool({
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 'Tungl@ne69'
})

export default database