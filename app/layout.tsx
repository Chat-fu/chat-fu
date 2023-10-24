import { ReactNode } from "react";
import dosis from "@/fonts/dosis";
import '../globals.css'

export default function Layout({ children }: { children: ReactNode}) {
    return (
        <body className={`relative w-full max-w-screen overflow-x-hidden h-full min-h-screen relative bg-blue-50 ${dosis.medium}`}>
            {children}
        </body>
    )
}