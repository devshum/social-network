import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
console.log(classes);

const Nav = () => (
    <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="/dialogs" activeClassName={classes.active}>Messages</NavLink>
          </li>
          <li>
            <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
          </li>
          <li>
            <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
          </li>
          <li>
            <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
          </li>
        </ul>
    </nav>
);

export default Nav;