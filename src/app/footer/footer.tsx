import styles from "./footer.module.css";

const Footer = () => (
    <footer className={styles.footer}>
        <a className={styles.brand} href="/">Numberfall</a>
        <p>Build expressions. Beat the clock.</p>
        <a className={styles.privacyLink} href="/privacy/numberfall/">Privacy</a>
        <p>&copy; 2026 CodeDragons</p>
    </footer>
);

export default Footer;
