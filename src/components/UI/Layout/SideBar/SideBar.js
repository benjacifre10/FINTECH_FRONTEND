import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.css';

const SideBar = ({ show, click }) => (
    <nav className={ `side-bar ${show ? "open" : ""} `}>
        <div className="side-bar__close">
            <span onClick={click}>X</span>
        </div>
        <ul>
            <li>
                <NavLink 
                    className="side-bar__link"
                    to="/current"
                    onClick={click}>
                    Clima Actual
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="side-bar__link"
                    to="/forecast"
                    onClick={click}>
                    Clima a Futuro
                </NavLink>
            </li>
        </ul>
    </nav>
);

export default SideBar;
