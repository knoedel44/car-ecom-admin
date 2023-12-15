import styles from "../../components/Dashboard/overview/DashboardContent.module.css";
import globalStyles from "@/app/page.module.css";
export default function Customers() {
    return (
        <main className={styles.dashboardContent}>
            <h4 className={globalStyles.navigationLinks}>Pages / Customers</h4>
            <h1>Customers</h1>
        </main>
    )
}