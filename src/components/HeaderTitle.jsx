import React from 'react';
import MySearch from './UI/MySearch/MySearch';

const HeaderTitle = () => {
    return (
        <section className='header-title'>
            <h1 className="title">
                find the place to live <span>your dreams</span> easily here
            </h1>
            <p>
                Everything you need about finding your place to live will be here, where it will be easier for you
            </p>
            <MySearch/>
            <div className="our-partner">
                Our Partnership
                <div className='partners-logo'>
                    <img src={require('../assets/partners_logo_1.png')} alt="img" />
                    <img src={require('../assets/partners_logo_2.png')} alt="img" />
                    <img src={require('../assets/partners_logo_3.png')} alt="img" />
                    <img src={require('../assets/partners_logo_4.png')} alt="img" />
                </div>
            </div>
        </section>
    )
}

export default HeaderTitle;