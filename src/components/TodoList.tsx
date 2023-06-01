import { Todo } from "@/models/todo.model"
import TodoPreview from "./TodoPreview"

type Props = {
    todos: Todo[]
}

export default function TodoList({ todos }: Props) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <li key={todo._id}>
                    <TodoPreview todo={todo} />
                </li>
            ))}
        </ul>
    )
}
