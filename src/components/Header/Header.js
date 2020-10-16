import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = props => <header className={styles.header}>
                        <div className={styles.headerInner}>
                            <img src="https://cdn.mos.cms.futurecdn.net/BVb3Wzn9orDR8mwVnhrSyd-1200-80.jpg" alt="header img"/>

                            <div className={styles.loginBlock}>
                                <NavLink to={'/login'}>{props.isAuth ? props.login : 'Login'}</NavLink>
                            </div>
                        </div>
                    </header>

export default Header;