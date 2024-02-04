
import styles from "../components/Dashboard/overview/DashboardContent.module.css";
import globalStyles from "../page.module.css";

export default function Home() {
    return (
        <div className={styles.dashboardContent}>
            <h4 className={globalStyles.navigationLinks}>Pages / Dashboard</h4>
            <h1>Dashboard</h1>
        </div>
    );
}

