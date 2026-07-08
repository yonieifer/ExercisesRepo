import fs from "fs/promises"

const jsonPath = "./users.json"

export const createJson = async (path) => {
    const dir = await fs.readdir(path)
    if (!dir.includes("users.json")) {
        await fs.writeFile("users.json", "[]")
    }
}


export const loadUsers = async () => {
    const data = await fs.readFile(jsonPath)
    const users = JSON.parse(data)
    return users
}

export const writeUsers = async (users) => {
    try {
        await fs.writeFile(jsonPath, JSON.stringify(users, null, 2))
    } 
    catch (error) {
        console.log("writing failed:", error)
    }
}
