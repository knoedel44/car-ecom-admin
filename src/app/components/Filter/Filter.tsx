'use client'

import React, { useState } from "react";
import styles from "./Filter.module.css";

export default function Filter() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const handleItemClick = (category) => {
        setActiveItem(category);
    };

    return (
        <main className={styles.filterContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>
                    <strong>HORIZON</strong> CARS
                </h1>
            </div>
            <div className={styles.filterCategoryContainer}>
                <ul className={styles.filterCategories}>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Dashboard" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Dashboard")}
                    >
                        Dashboard
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Orders" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Orders")}
                    >
                        Orders
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Cars" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Cars")}
                    >
                        Cars
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Customers" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Customers")}
                    >
                        Customers
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Reports" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Reports")}
                    >
                        Reports
                    </li>
                </ul>
            </div>
        </main>
    );
}
