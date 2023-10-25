import Filter from "@/app/components/Filter/Filter";
import styles from "./page.module.css";
import DashboardContent from "@/app/components/Dashboard/overview/DashboardContent";

export default function Home() {
    return (
        <div className={styles.pageContent}>
            <Filter/>
            <DashboardContent/>
        </div>
    )
}
