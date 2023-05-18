import React, { useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import MySelect from './UI/MySelect/MySelect';

const Nav = () => {
    const [sort, setSort] = useState('house');

    const sortOptions = [
        { value: 'house', name: 'House' },
        { value: 'villa', name: 'Villa' },
        { value: 'apartement', name: 'Apartement' },
    ]

    return (
        <nav className='row'>
            <a href='' className="logo-wrapper">
                <i className='logo'></i>
                <i className='logo'></i>
                <span>Hounter</span>
            </a>
            <div className="navbar">
                <span className='item'>About Us</span>
                <span className='item'>Article</span>
                <MySelect
                    value={(sortOptions.find(e => e.value === sort)).name}
                    onChange={selectedSort => setSort(selectedSort)}
                    options={sortOptions}
                />
                <MyButton>Sign Up!</MyButton>
            </div>
        </nav>
    )
}

export default Nav;