import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image'

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerItems}>&copy; 2024 CodeDragons</div>
            <div className={styles.footerItems}>
                Follow us on{' '}
                <a href="https://twitter.com/codedragonsdev" target="_blank" rel="noopener noreferrer">
                    <Image src="/twitter.svg" alt="X" width={12} height={12} />
                </a>
            </div>
        </footer>
    );
};

export default Footer;