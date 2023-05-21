import React from 'react';
import MySearchV2 from './UI/MySearch_v.2/MySearchV2';

const Subscribe = () => {
    return (
        <section className='row subscribe'>
            <div className="content">
                <div className="head">
                    <div className="title">
                        <h1>Subscribe For More Info and update from Hounter</h1>
                    </div>
                </div>
                <MySearchV2 />
                <img className='icon-1 outer-group' src={require("../assets/subscribe/item-1.png")} alt="img" />
                <img className='icon-2 inner-group' src={require("../assets/subscribe/item-2.png")} alt="img" />
                <img className='icon-3 inner-group' src={require("../assets/subscribe/item-3.png")} alt="img" />
                <img className='icon-4 outer-group' src={require("../assets/subscribe/item-4.png")} alt="img" />
                <img className='avatar icon-5 outer-group' src={require("../assets/avatars/owner-1.png")} alt="img" />
                <img className='avatar icon-6 inner-group' src={require("../assets/avatars/owner-3.png")} alt="img" />
                <img className='avatar icon-7 inner-group' src={require("../assets/avatars/owner-10.png")} alt="img" />
                <img className='avatar icon-8 outer-group' src={require("../assets/avatars/owner-13.png")} alt="img" />
            </div>
        </section>
    )
}

export default Subscribe;