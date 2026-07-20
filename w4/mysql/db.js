import mysql from 'mysql2/promise';


let pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root"
})

const createDB = async () => {
    try {
    await pool.execute("create database if not exists shop")
    console.log("database shop inside");
    
    } catch (error) {
    console.log(error);
    }
}
await createDB()
await pool.end()


pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "shop"
})

const createtTable = async () => {
    try {
        await pool.execute(`create table if not exists products (
            id int primary key auto_increment,
            product_name varchar(50) not null,
            price int not null
        )`)
        console.log("table products inside");
        
    } catch (error) {
        console.log(error);
        
    }
}

const find = async (filter) => {
    const filterQuery = filter ? 'where ' + Object.keys(filter).map(key => `${key}=?`).join(" and ") : ""
    const values = filter ? Object.values(filter) : undefined
    const rows = await pool.execute(`select * from products ${filterQuery}`, values)
    return rows
}

const findById = async (id) => {
    const result = await find({id})
    return result
}

const createProduct = async (product) => {
    const keys = Object.keys(product).join(", ")
    const values = Object.values(product)
    const [result] = await pool.execute(`insert into products (${keys}) values (${values.map((val) => '?')})`, values)
    return result.insertId
}

await createtTable()
// console.log(await createProduct({product_name: "apple", price: 15}));
console.log(await findById(45));


await pool.end()