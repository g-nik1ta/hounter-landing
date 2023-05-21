import React, { useEffect } from 'react';
import MyButton from './UI/MyButton/MyButton';
import MySelect from './UI/MySelect/MySelect';
import Logo from './UI/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { changeCategoryCreator } from '../store/categoryReducer';

const Nav = () => {
    const category = useSelector(state => state.categoryReducer.category);
    const dispatch = useDispatch();

    const sortOptions = [
        { value: 'House', name: 'House' },
        { value: 'Villa', name: 'Villa' },
        { value: 'Apartment', name: 'Apartment' },
    ]

    useEffect(() => {
        dispatch(changeCategoryCreator(sortOptions.find(e => e.value === category).name))
    }, [category])

    return (
        <nav className='row'>
            <Logo/>
            <div className="navbar">
                <span className='item'>About Us</span>
                <span className='item'>Article</span>
                <MySelect
                    onChange={selectedCategory => dispatch(changeCategoryCreator(selectedCategory))}
                    options={sortOptions}
                />
                <MyButton>Sign Up!</MyButton>
            </div>
        </nav>
    )
}

export default Nav;