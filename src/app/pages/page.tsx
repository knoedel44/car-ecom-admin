'use client'

import DashboardContent from "@/app/components/Dashboard/overview/DashboardContent";
import { useSession, signIn, signOut } from "next-auth/react"
export default function Home() {
    const { data: session } = useSession();
    if (session) {
        return (
            <DashboardContent/>
        )
    } else {
        return (
            <div>
                Not signed in <br />
                <button onClick={() => signIn()}>Sign in</button>
            </div>
        )
    }
}

