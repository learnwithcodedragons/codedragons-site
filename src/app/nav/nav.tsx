import React from 'react';
import styles from "./nav.module.css";
import Image from "next/image";


const Nav = () => {
    return (
        <nav className={styles.navBar}>
            <ul className={styles.navBarItems}>
                <li><a href="/">

                    <img
                        src="/code-dragons-logo.png"
                        alt="Code Dragons Logo"
                        width={48}
                        height={48}
                    />

                </a></li>
                <li><a href="/privacy">Privacy</a></li>
                <li><a href="/competition">Competition</a></li>
                <span className={styles.navBarItemsRight}>
                    <li><a href="https://play.google.com/store/apps/details?id=com.CodeDragons.AquaRush" className={styles.buttonStyle}>Install on Google Play store</a></li>
                </span>
            </ul>
        </nav>
    );
};

export default Nav;