import styles from "./DashboardContent.module.css";
import Login from "@/app/components/Login/Login";
export default function DashboardContent() {
    return (
        <div className={styles.dashboardContent}>
            <h1>Main</h1>
            <Login/>
        </div>
    )
}