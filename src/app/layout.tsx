import AppHeader from "@/components/AppHeader"
import AppFooter from "@/components/AppFooter"
import '@/styles/style.css'

export const metadata = {
    title: 'Todo App',
    description: 'Manage todos...',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className="main-layout">
                <AppHeader />
                {children}
                <AppFooter />
            </body>
        </html>
    )
}
