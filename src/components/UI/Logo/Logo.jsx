import React from 'react';
import cls from './Logo.module.css';

const Logo = () => {
    return (
        <a href='' className={cls.logoWrapper}>
            <i className={cls.logo}></i>
            <i className={cls.logo}></i>
            <span>Hounter</span>
        </a>
    )
}

export default Logo;