// 'use client'
import globalStyles from "../../../page.module.css"
import styles from "./DashboardContent.module.css";
export default function DashboardContent() {
        return (
            <div className={styles.dashboardContent}>
                <h4 className={globalStyles.navigationLinks}>Pages / Dashboard</h4>
                <h1>Dashboard</h1>
            </div>
        );
}