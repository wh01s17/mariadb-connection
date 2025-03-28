const mariadb = require('mariadb')

const pool = mariadb.createPool({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
    connectionLimit: 5,  // Límite de conexiones simultáneas
})

async function connect() {
    try {
        const conn = await pool.getConnection()
        console.log('Connected to MariaDB')
        conn.release()  // Liberar la conexión
    } catch (error) {
        console.error('Error connecting to MariaDB:', error)
    }
}

connect()

module.exports = pool

/**
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: process.env.MARIADB_HOST,
    user: process.env.MARIADB_USER,
    password: process.env.MARIADB_PASSWORD,
    database: process.env.MARIADB_DATABASE,
})

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err)
        return
    }
    console.log('Connected to MySQL')
})

module.exports = connection

 */