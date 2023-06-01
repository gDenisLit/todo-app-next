import Link from "next/link"

export default function AppHeader() {
    const links = [
        {
            id: `${Date.now()}-${Math.random()}`,
            path: '/',
            name: 'Home',
        },
        {
            id: `${Date.now()}-${Math.random()}`,
            path: '/todo',
            name: 'Todos'
        },
    ]
    return (
        <header className="app-header">
            <h2>Todo App</h2>
            <ul>
                {links.map(link => (
                    <li key={link.id}>
                        <Link href={link.path}>{link.name}</Link>
                    </li>
                ))}
            </ul>
        </header>
    )
}
