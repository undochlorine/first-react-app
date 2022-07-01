import React from 'react'
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.Navbar}>
            <NavLink to="/profile" className={({isActive}) => isActive ? style['active'] : ''}>Profile</NavLink>
            <NavLink to="/dialogs" className={({isActive}) => isActive ? style['active'] : ''}>Dialogs</NavLink>
            <NavLink to="/music" className={({isActive}) => isActive ? style['active'] : ''}>Music</NavLink>
            <NavLink to="/todo" className={({isActive}) => isActive ? style['active'] : ''}>Todo</NavLink>
        </div>
    )
}

export default Navbar;