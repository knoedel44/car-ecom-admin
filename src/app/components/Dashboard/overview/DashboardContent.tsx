// 'use client'

import styles from "./DashboardContent.module.css";
import { useSession } from "next-auth/react";
import Login from "@/app/components/Login/Login";

export default function DashboardContent() {
    const { data: session, status } = useSession();

    if (session) {
        return (
            <div className={styles.dashboardContent}>
                <h1>Dashboard</h1>
            </div>
        );
    } else {
        return (
            <div className={styles.dashboardContent}>
                <Login />
            </div>
        );
    }
}
