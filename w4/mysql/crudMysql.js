import mysql from "mysql2/promise";

const dbName = "shop"
const tableName = "products"

const config = {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: dbName,
};

const createDB = async () => {
    const { database, ...connConfig } = config;
    const conn = await mysql.createConnection(connConfig);
    try {
        await conn.execute(`create database if not exists ${dbName}`);
        console.log("database init");
    } catch (error) {
        console.error(error);
    } finally {
        conn.end();
    }
};


const pool = mysql.createPool(config);

const createtTable = async () => {
    try {
        await pool.execute(`create table if not exists ${tableName} (
            id int primary key auto_increment,
            product_name varchar(50) not null,
            price int not null
        )`);
        console.log("table init");
    } catch (error) {
        console.error(error);
    }
};

const create = async (product) => {
    const keys = Object.keys(product)
    const values = Object.values(product)
    const placeHolders = values.map(() => "?")
    const query = `insert into ${tableName} (${keys}) values (${placeHolders})`
    try {
        const [result] = await pool.execute(query, values)
        return result
    } catch (error) {
        console.error(error);
    }
}

const get = async (filter = {}) => {
    const keys = Object.keys(filter)
    const values = Object.values(filter)

    let whereCondition = ""
    if (keys.length > 0) {
        whereCondition = " where " + keys.map(key => key + "=?").join(" and ") 
    }
    const query = `select * from ${tableName}` + whereCondition
    try {
        const [result] = await pool.execute(query, values)
        return result
    } catch (error) {
        console.error(error);
    }
}

const update = async (data, filter = {}) => {
    const dataKeys = Object.keys(data)
    const filterKeys = Object.keys(filter)
    const values = [...Object.values(data), ...Object.values(filter)]
    if (dataKeys.length === 0 || filterKeys.length === 0) return
    const setData = dataKeys.map(key => key + "=?").join(", ")
    const whereCondition = filterKeys.map(key => key + "=?")
    const query = `update ${tableName} set ${setData} where ${whereCondition}`
    try {
        const [result] = await pool.execute(query, values)
        return result
    } catch (error) {
        console.error(error);
    }
}

const remove = async (filter) => {
    const keys = Object.keys(filter)
    const values = Object.values(filter)
    if (keys.length === 0) return
    const whereCondition = keys.map(key => key + "=?")
    const query = `delete from ${tableName} where ${whereCondition}`
try {
    const [result] = await pool.execute(query, values)
    return result
} catch (error) {
    console.error(error);
}
}

await createDB()
await createtTable()
// console.log(await create({product_name: "orange", price: 20}));
// console.log(await create({product_name: "apple", price: 20})
console.log(await get());
// console.log(await remove({product_name: "banana"}));
// console.log(await update({product_name: "banana"}, {price: 25}));





pool.end()