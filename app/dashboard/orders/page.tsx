import styles from "@/_components/Dashboard/overview/DashboardContent.module.css";
import globalStyles from "../../page.module.css";
export default function Orders() {
    return (
        <div className={styles.dashboardContent}>
            <h4 className={globalStyles.navigationLinks}>Pages / Orders</h4>
            <h1>Orders</h1>
        </div>
    )
}