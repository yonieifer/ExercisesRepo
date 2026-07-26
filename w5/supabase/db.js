import { createClient } from '@supabase/supabase-js'

const {SB_URL, SB_KEY} = process.env
const sb = createClient(SB_URL, SB_KEY)

const create = async (table, newData) => {
    const {data, error} = await sb.from(table).insert(newData).select()
    if (error) return error
    return data[0].id
}

const read = async (table) => {
    const {data, error} = await sb.from(table).select()
    if (error) return error
    return data
}

const update = async (table, newData, filter) => {
    const {data, error} = await sb.from(table).update(newData).match(filter).select()
    if (error) return error
    return data
}

const del = async (table, filter) => {
    const {data, error} = await sb.from(table).delete().match(filter).select()
    if (error) return error
    return data
}

export {create, update, read, del}

