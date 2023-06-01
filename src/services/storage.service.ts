import { Todo } from "@/models/todo.model"
import { utilService } from "./uti.service"

export function useStorageService<T extends Todo>() {
    const DB: T[] = []

    async function query() {
        return DB
    }

    async function get(itemId: string) {
        const item = DB.find((i: T) => i._id === itemId)
        if (!item) throw new Error('not found')
        else return item
    }

    async function post(item: T) {
        item._id = utilService.makeId()
        DB.unshift(item)
        return item
    }

    async function put(item: T) {
        const idx = DB.findIndex(i => i._id === item._id)
        if (idx < 0) throw new Error('not found')
        DB.splice(idx, 1, item)
        return item
    }

    async function remove(itemId: string) {
        const idx = DB.findIndex(i => i._id === itemId)
        if (idx < 0) throw new Error('not found')
        DB.splice(idx, 1)
        return itemId
    }

    async function initDB(cb: () => T[]) {
        if (DB.length) return
        const items = cb()
        DB.push(...items)
    }

    return {
        query,
        get,
        post,
        put,
        remove,
        initDB,
    }
}