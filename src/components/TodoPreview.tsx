import { Todo } from "@/models/todo.model"

type Props = {
    todo: Todo
}

export default function TodoPreview({ todo }: Props) {

    const progress = todo.isDone ? 'Done' : 'Pending'

    return (
        <article className="todo-preview">
            <p>Task: {todo.txt}</p>
            <p>Severity: {todo.severity}</p>
            <p>Status: {progress}</p>
        </article>
    )
}
