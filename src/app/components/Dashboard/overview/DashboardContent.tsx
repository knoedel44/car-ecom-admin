import styles from "./DashboardContent.module.css";
export default function DashboardContent() {
    return (
        <main className={`${styles.dashboardContent} ${styles.active}`}>
            <h1>Main Dashboard</h1>
        </main>
    )
}