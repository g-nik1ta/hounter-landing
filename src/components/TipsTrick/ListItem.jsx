import React from 'react';

const ListItem = ({ item }) => {
    return (
        <div className='item'>
            <img
                className='item-img'
                src={require(`../../assets/tips-trick/${item.img}`)}
                alt="img"
            />
            <div className="info">
                <div className="owner">
                    <img
                        src={require(`../../assets/avatars/${item.ownerImg}`)}
                        alt="img"
                    />
                    <h1 className="name">{item.ownerName}</h1>
                </div>
                <p className="title">{item.title}</p>
                {
                    !!item.subtitle.length &&
                    <p className="subtitle">{item.subtitle}</p>
                }
                <div className="time-date">{item.time} read | {item.date}</div>
            </div>
        </div>
    )
}

export default ListItem;