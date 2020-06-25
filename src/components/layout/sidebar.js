import React from 'react';
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li>
                    <NavLink to="/Add" exact>Add</NavLink>
                </li>
                <li>
                    <NavLink to="/result">Result</NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;