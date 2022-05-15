import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    return (
        <div className={styles.Footer}>
            <p>© {getCurrentYear()} <a href='https://stuart.com/'>STUART</a></p>
        </div>
    )

}

export default Footer;
