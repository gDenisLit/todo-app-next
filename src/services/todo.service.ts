import { Todo } from "@/models/todo.model"
import { useStorageService } from "./storage.service"
import { utilService } from "./uti.service"

const storageService = useStorageService<Todo>()
storageService.initDB(_createTodos)

export const todoService = {
    query,
}

async function query() {
    try {
        const todos = await storageService.query()
        return todos
    }
    catch (err) {
        console.dir('todoService: Error getting todos')
        return null
    }
}

function _createTodos() {
    const todos = []
    for (let i = 0; i < 5; i++) {
        todos.push(_createTodo())
    }
    return todos
}

function _createTodo(): Todo {
    return {
        _id: utilService.makeId(),
        txt: 'Todo' + utilService.getRandomInt(0, 5),
        severity: utilService.getRandomInt(0, 5),
        isDone: false
    }
}

