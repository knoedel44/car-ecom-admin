'use client'

import React, { useState } from "react";
import styles from "./Filter.module.css";
import { HiHome, HiArchive, HiIdentification, HiCog } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";

export default function Filter() {
    const [activeItem, setActiveItem] = useState("Dashboard");

    const handleItemClick = (category) => {
        setActiveItem(category);
    };

    const getIconColor = (category) => {
        return activeItem === category ? { color: "#421af5" } : {};
    };

    return (
        <main className={styles.filterContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>
                    <span className={styles.logoName}>HORIZON</span> CARS
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
                        <HiHome className={styles.icon} style={getIconColor("Dashboard")} />
                        Dashboard
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Orders" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Orders")}
                    >
                        <HiArchive className={styles.icon} style={getIconColor("Orders")} />
                        Orders
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Cars" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Cars")}
                    >
                        <AiFillCar className={styles.icon} style={getIconColor("Cars")} />
                        Cars
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Customers" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Customers")}
                    >
                        <HiIdentification className={styles.icon} style={getIconColor("Customers")} />
                        Customers
                    </li>
                    <li
                        className={`${styles.filterItem} ${
                            activeItem === "Settings" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Settings")}
                    >
                        <HiCog className={styles.icon} style={getIconColor("Settings")} />
                        Settings
                    </li>
                </ul>
            </div>
        </main>
    );
}
