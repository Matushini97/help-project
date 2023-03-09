import React from 'react';
import {HeaderPropsType} from '../../Types'
import s from './Header.module.css'
import logo from '../../Images/MemeLogo.png'

const Header = (props: HeaderPropsType) => {
    return (
        <header className={s.header}>
            <div className={s.headerLogo}>
                <img src={logo} className={s.headerLogoImg}/>
                <h3>Samurai Help - Meme Generator</h3>
            </div>
            <span className={s.span}>Project 1 for 🥷SH</span>

        </header>
    );
};

export default Header;