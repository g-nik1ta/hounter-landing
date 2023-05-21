import React from 'react';
import MyButton from '../UI/MyButton/MyButton';
import ListItem from './ListItem';
import { useSelector } from 'react-redux';

const TipsTrick = () => {
    const itemList = useSelector(state => state.slidersInfoReducer.tipsTrickItems);

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
                        <ListItem item={item} key={item.id} />
                    )}
                </div>
                <div className="item-wrapper">
                    <ListItem item={itemList.slice(-1)[0]} />
                </div>
            </div>
        </section>
    )
}

export default TipsTrick;