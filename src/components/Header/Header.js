import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.module.scss';


const Header = () => (

        <section className={styles.headerWrap}>
              <div className={styles.container}>
                    <div className={styles.header}>
                          <h1 className={styles.logo}>
                                <a href="https://stuart.com/">
                                      <img src={require('../../assets/icons/stuart-logo.jpeg')}/>
                                </a>
                          </h1>
                        <nav>
                            <ul>
                                <li><a href="">Business Solutions</a></li>
                                <li><a href="">Become a courier</a></li>
                            </ul>
                        </nav>
                    </div>
              </div>
        </section>
);

Header.propTypes = {

};

Header.defaultProps = {};

export default Header;
