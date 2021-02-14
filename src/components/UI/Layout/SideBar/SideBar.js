import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './SideBar.module.css';

const SideBar = ({ show, click }) => (
    <nav className={ `${styles.side_bar} ${show ? "open" : ""} `}>
        <div className={styles.side_bar__close}>
            <span onClick={click}>X</span>
        </div>
        <ul>
            <li>
                <NavLink 
                    className={styles.side_bar__link}
                    to="/current"
                    onClick={click}>
                    Clima Actual
                </NavLink>
            </li>
            <li>
                <NavLink
                    className={styles.side_bar__link}
                    to="/forecast"
                    onClick={click}>
                    Clima a Futuro
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default SideBar;
