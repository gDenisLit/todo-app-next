import TodoList from "@/components/TodoList"
import { todoService } from "@/services/todo.service"

export default async function TodoPage() {

    const todos = await todoService.query()

    return (
        <main className="todo-page page-layout">
            {todos &&
                <>
                    <h1>Todos</h1>
                    <TodoList todos={todos} />
                </>
            }
        </main>
    )
}
