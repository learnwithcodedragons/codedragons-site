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
            </ul>
        </nav>
    );
};

export default Nav;