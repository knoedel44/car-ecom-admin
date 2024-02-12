import React from "react";
import styles from "@/_components/Dashboard/overview/DashboardContent.module.css";
import globalStyles from "../../page.module.css";
export default function CarOverview() {
    return (
        <div className={styles.dashboardContent}>
            <h4 className={globalStyles.navigationLinks}>Pages / Cars</h4>
            <h1>CarOverview</h1>
        </div>
    )
}