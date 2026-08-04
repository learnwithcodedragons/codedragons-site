import styles from "./nav.module.css";

const Nav = () => (
    <header className={styles.header}>
        <nav className={styles.navBar} aria-label="Main navigation">
            <a className={styles.brand} href="/" aria-label="Numberfall home">
                <span className={styles.brandTile} aria-hidden="true">9</span>
                <span>Numberfall</span>
            </a>
            <ul className={styles.navBarItems}>
                <li><a href="#how-it-plays">How it plays</a></li>
                <li><a href="#features">Features</a></li>
                <li><a href="#daily">Daily challenge</a></li>
            </ul>
            <span className={styles.availability}>Coming soon</span>
        </nav>
    </header>
);

export default Nav;
