import React, { useState } from 'react';
import cls from './MySearchV2.module.css';
import MyButton from '../MyButton/MyButton';

const MySearchV2 = () => {
    const [searchValue, setSearchValue] = useState('');

    return (
        <div className={cls.search__container}>
            <input
                type="search"
                value={searchValue}
                onChange={e => setSearchValue(e.target.value)}
                placeholder='Your email here'
                className={cls.search}
            />
            <MyButton>Subsribe Now</MyButton>
        </div>
    )
}

export default MySearchV2;