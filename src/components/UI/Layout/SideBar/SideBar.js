import React from 'react';
import { NavLink } from 'react-router-dom';

import './SideBar.css';

import { readFile } from '../../../../util/importCSV';

const SideBar = ({ show, click }) => (
    <nav className={ `side-bar ${show ? "open" : ""} `}>
        <div className="side-bar__close">
            <span onClick={click}>X</span>
        </div>
        <ul>
            <li>
                <NavLink 
                    className="side-bar__link"
                    to="/components"
                    onClick={click}>
                    Componentes
                </NavLink>
            </li>
            <li>
                <NavLink
                    className="side-bar__link"
                    to="/plans"
                    onClick={click}>
                    Planes
                </NavLink>
            </li>
            <li>
                <label htmlFor="file-input">
                    <i className="fas fa-upload"></i>
                </label>
                <input id="file-input" type="file" onChange={readFile} />
            </li>
        </ul>
    </nav>
);

export default SideBar;
