import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './NavigationBar.module.css';

import ToggleButton from '../SideBar/ToggleButton';

const NavigationBar = ({ toggleClick }) => (
    <header className={styles.toolbar}>
        <nav className={styles.toolbar__navigation}>
            <div className={styles.toolbar__toggle_button}>
                <ToggleButton click={toggleClick}/>
            </div>
            <div className={styles.toolbar__logo}>
                <NavLink
                    to="/"
                >
                    <img 
                        className={styles.toolbar__logo_img}
                        src="/logo_white_cropped.png"
                        alt="fintech"
                    />
                </NavLink>
            </div>
            <div className={styles.spacer} />
            <div className={styles.toolbar__navigation_items}>
                <ul>
                    <li>
                        <NavLink 
                            className={styles.toolbar__link}
                            activeClassName={styles.toolbar__link_active}
                            to="/current">
                            Clima Actual
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={styles.toolbar__link}
                            activeClassName={styles.toolbar__link_active}
                            to="/forecast">
                            Clima a Futuro
                        </NavLink>
                    </li>
                </ul> 
            </div>
        </nav>
    </header>
);

export default NavigationBar;
