import styles from "./Filter.module.css";

export default function Filter() {
    return (
        <main className={styles.filterContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}><strong>HORIZON</strong> CARS</h1>
            </div>
            <div className={styles.filterCategoryContainer}>
                <ul className={styles.filterCategories}>
                    <li className={styles.filterItem}>Dashboard</li>
                    <li className={styles.filterItem}>Orders</li>
                    <li className={styles.filterItem}>Cars</li>
                    <li className={styles.filterItem}>Customers</li>
                    <li className={styles.filterItem}>Reports</li>
                </ul>
            </div>
        </main>
    )
}