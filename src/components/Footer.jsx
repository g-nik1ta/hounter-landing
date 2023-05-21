import React from 'react';
import Logo from './UI/Logo/Logo';
import { useDispatch } from 'react-redux';
import { changeCategoryCreator } from '../store/categoryReducer';

const Footer = () => {
    const dispatch = useDispatch();

    return (
        <footer className="row">
            <div className="content">
                <div className="info-block bio">
                    <Logo />
                    <p className="subtitle">We provide information about properties such as houses, villas and apartments to help people find their dream home</p>
                    <div className="socials-box">
                        <i className='facebook'></i>
                        <i className='twitter'></i>
                        <i className='instagram'></i>
                    </div>
                </div>
                <div className="info-block">
                    <p className="title">Property</p>
                    <a
                        href='#featured-house'
                        className="subtitle"
                        onClick={() => dispatch(changeCategoryCreator('House'))}
                    >House</a>
                    <a
                        href='#featured-house'
                        className="subtitle"
                        onClick={() => dispatch(changeCategoryCreator('Apartment'))}
                    >Apartment</a>
                    <a
                        href='#featured-house'
                        className="subtitle"
                        onClick={() => dispatch(changeCategoryCreator('Villa'))}
                    >Villa</a>
                </div>
                <div className="info-block">
                    <p className="title">Article</p>
                    <p className="subtitle">New Article</p>
                    <p className="subtitle">Popular Article</p>
                    <p className="subtitle">Most Read</p>
                    <p className="subtitle">Tips & Tricks</p>
                </div>
                <div className="info-block">
                    <p className="title">Contact</p>
                    <p className="subtitle">2464 Royal Ln. Mesa, New Jersey 45463</p>
                    <p className="subtitle">(671) 555-0110</p>
                    <p className="subtitle">info@hounter.com</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;