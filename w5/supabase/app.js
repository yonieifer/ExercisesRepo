import {create, read, update, del} from "./db.js"

const createCreator = async (name, age) => {
    const newId = await create("creators", {name, age})
    return newId
}

const getAllCreators = async () => {
    const creators = await read("creators")
    return creators
}

const updateCreator = async (newData, filter) => {
    const newRow = await update("creators", newData, filter)
    return newRow
}

const deleteCreator = async (filter) => {
    const deletedRow = await del("creators", filter)
    return deletedRow
}


const createPost = async (content, creatorId) => {
    const newId = await create("posts", {content, creator_id: creatorId})
    return newId
}

const getAllPosts = async () => {
    const posts = await read("posts")
    return posts
}

const updatePost = async (newData, filter) => {
    const newRow = await update("posts", newData, filter)
    return newRow
}

const deletePost = async (filter) => {
    const deletedRow = await del("posts", filter)
    return deletedRow
}