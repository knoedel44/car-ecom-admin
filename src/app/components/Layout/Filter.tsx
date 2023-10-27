'use client'

import React, { useState } from "react";
import styles from "./Filter.module.css";
import { HiHome, HiArchive, HiIdentification, HiCog } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import Link from "next/link";

export default function Filter() {
    const [activeItem, setActiveItem] = useState<String>("Dashboard");

    const handleItemClick = (category: String) => {
        setActiveItem(category);
    };

    const getIconColor = (category: String) => {
        return activeItem === category ? { color: "#421af5" } : {};
    };

    return (
        <aside className={styles.filterContainer}>
            <div className={styles.logoContainer}>
                <h1 className={styles.logo}>
                    <span className={styles.logoName}>HORIZON</span> CARS
                </h1>
            </div>
            <nav className={styles.filterCategoryContainer}>
                <ul className={styles.filterCategories}>
                    <Link
                        href={"/"}
                        className={`${styles.filterItem} ${
                            activeItem === "Dashboard" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Dashboard")}
                    >
                        <HiHome className={styles.icon} style={getIconColor("Dashboard")} />
                        Dashboard
                    </Link>
                    <Link
                        href={"/Orders"}
                        className={`${styles.filterItem} ${
                            activeItem === "Orders" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Orders")}
                    >
                        <HiArchive className={styles.icon} style={getIconColor("Orders")} />
                        Orders
                    </Link>
                    <Link
                        href={"/Cars"}
                        className={`${styles.filterItem} ${
                            activeItem === "Cars" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Cars")}
                    >
                        <AiFillCar className={styles.icon} style={getIconColor("Cars")} />
                        Cars
                    </Link>
                    <Link
                        href={"/Customers"}
                        className={`${styles.filterItem} ${
                            activeItem === "Customers" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Customers")}
                    >
                        <HiIdentification className={styles.icon} style={getIconColor("Customers")} />
                        Customers
                    </Link>
                    <Link
                        href={"/Settings"}
                        className={`${styles.filterItem} ${
                            activeItem === "Settings" ? styles.active : ""
                        }`}
                        onClick={() => handleItemClick("Settings")}
                    >
                        <HiCog className={styles.icon} style={getIconColor("Settings")} />
                        Settings
                    </Link>
                </ul>
            </nav>
        </aside>
    );
}
