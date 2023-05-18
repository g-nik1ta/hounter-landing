import React, { useState } from 'react';
import cls from './MySearch.module.css';
import MyButton from '../MyButton/MyButton';

const MySearch = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={cls.search__container}>
            <input
                type="search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder='Search for the location you want!'
                className={cls.search}
            />
            <MyButton>Search</MyButton>
        </div>
    )
}

export default MySearch;