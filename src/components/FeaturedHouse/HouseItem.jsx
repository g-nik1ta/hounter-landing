import React from 'react';

const HouseItem = ({ item }) => {
    return (
        <div className="item">
            <img src={require(`../../assets/featured-house/slider-items/${item.img}`)} alt="img" />
            <div className="title">
                <h2 className='name'>{item.name}</h2>
                <p className="price">{item.price}</p>
            </div>
            <div className="owner">
                <img
                    src={require(`../../assets/featured-house/slider-items/${item.ownerImg}`)}
                    alt="img"
                />
                <div className="title">
                    <h1>{item.title}</h1>
                    <p>{item.subtitle}</p>
                </div>
            </div>
        </div>
    )
}

export default HouseItem;