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
                <img className='group-1' src={require("../assets/subscribe/item-1.png")} alt="img" />
                <img className='group-2' src={require("../assets/subscribe/item-2.png")} alt="img" />
                <img className='group-3' src={require("../assets/subscribe/item-3.png")} alt="img" />
                <img className='group-4' src={require("../assets/subscribe/item-4.png")} alt="img" />
                <img className='avatar group-5' src={require("../assets/avatars/owner-1.png")} alt="img" />
                <img className='avatar group-6' src={require("../assets/avatars/owner-3.png")} alt="img" />
                <img className='avatar group-7' src={require("../assets/avatars/owner-10.png")} alt="img" />
                <img className='avatar group-8' src={require("../assets/avatars/owner-13.png")} alt="img" />
            </div>
        </section>
    )
}

export default Subscribe;