import styles from "../../components/Dashboard/overview/DashboardContent.module.css";
import globalStyles from "@/app/page.module.css";

export default function Settings() {
    return (
        <div className={styles.dashboardContent}>
            <h4 className={globalStyles.navigationLinks}>Pages / Settings</h4>
            <h1>Settings</h1>
        </div>
    )
}