import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavigationBar.css';

import ToggleButton from '../SideBar/ToggleButton';

import { readFile } from '../../../../util/importCSV';

const NavigationBar = ({ toggleClick }) => (
    <header className="toolbar">
        <nav className="toolbar__navigation">
            <div className="toolbar__toggle-button">
                <ToggleButton click={toggleClick}/>
            </div>
            <div className="toolbar__logo">
                <NavLink
                    to="/"
                >
                    <img 
                        className="toolbar__logo-img"
                        src="/favicon.ico"
                        alt="claro"
                    />
                </NavLink>
            </div>
            <div className="spacer" />
            <div className="toolbar__navigation-items">
                <ul>
                    <li>
                        <NavLink 
                            className="toolbar__link"
                            activeClassName="toolbar__link-active"
                            to="/components">
                            Componentes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className="toolbar__link"
                            activeClassName="toolbar__link-active"
                            to="/plans">
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
            </div>
        </nav>
    </header>
);

export default NavigationBar;
