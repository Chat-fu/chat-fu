import { ReactNode } from "react";
import dosis from "@/fonts/dosis";
import './globals.css'

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <html lang="en">
            <body className="bg-blue-50">
                {children}
            </body>
        </html>
    )
}