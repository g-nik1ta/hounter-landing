import React from 'react';
import MyButton from './UI/MyButton/MyButton';

const TipsTrick = () => {
    const itemList = [
        {
            id: 1,
            img: 'item-1.png',
            ownerImg: 'owner-1.png',
            ownerName: 'Dianne Russell',
            title: 'The things we need to check when we want to buy a house',
            subtitle: '',
            time: '4 min',
            date: '25 Apr 2021'
        },
        {
            id: 2,
            img: 'item-2.png',
            ownerImg: 'owner-10.png',
            ownerName: 'Courtney Henry',
            title: '7 Ways to distinguish the quality of the house we want to buy',
            subtitle: '',
            time: '6 min',
            date: '24 Apr 2021'
        },
        {
            id: 3,
            img: 'item-3.png',
            ownerImg: 'owner-11.png',
            ownerName: 'Darlene Robertson',
            title: 'The best way to know the quality of the house we want to buy',
            subtitle: '',
            time: '2 min',
            date: '2 min read | 24 Apr 2021'
        },
        {
            id: 4,
            img: 'item-4.png',
            ownerImg: 'owner-12.png',
            ownerName: 'Cameron Williamson',
            title: '12 Things to know before buying a house',
            subtitle: 'Want to buy a house but are unsure about what we should know, here I will try to explain what we should know and check when we want to buy a house',
            time: '8 min',
            date: '25 Apr 2021'
        },
    ]

    return (
        <section className='row tips-trick'>
            <div className="head">
                <div className="title">
                    <p>See tips and trick from our partnership</p>
                    <h1>Find out more about selling and buying homes</h1>
                </div>
                <MyButton>More Artikel</MyButton>
            </div>
            <div className="content">
                <div className="list-items">
                    {itemList.slice(0, -1).map(item =>
                        <div className='item' key={item.id}>
                            <img className='item-img' src={require(`../assets/tips-trick/${item.img}`)} alt="img" />
                            <div className="info">
                                <div className="owner">
                                    <img
                                        src={require(`../assets/avatars/${item.ownerImg}`)}
                                        alt="img"
                                    />
                                    <h1 className="name">{item.ownerName}</h1>
                                </div>
                                <p className="title">{item.title}</p>
                                <div className="time-date">{item.time} read | {item.date}</div>
                            </div>
                        </div>
                    )}
                </div>
                <div className="item-wrapper">
                    <div className='item'>
                        <img className='item-img' src={require(`../assets/tips-trick/${itemList.slice(-1)[0].img}`)} alt="img" />
                        <div className="info">
                            <div className="owner">
                                <img
                                    src={require(`../assets/avatars/${itemList.slice(-1)[0].ownerImg}`)}
                                    alt="img"
                                />
                                <h1 className="name">{itemList.slice(-1)[0].ownerName}</h1>
                            </div>
                            <p className="title">{itemList.slice(-1)[0].title}</p>
                            <p className="subtitle">{itemList.slice(-1)[0].subtitle}</p>
                            <div className="time-date">{itemList.slice(-1)[0].time} read | {itemList.slice(-1)[0].date}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TipsTrick;