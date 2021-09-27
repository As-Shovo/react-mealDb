import React from 'react';
import Card from '../Card/Card';

import './AllCards.css'

const AllCards = (props) => {
    const food = props.food;
   
    return (
        <div className='display-all-cards'>
            <Card handleAddToCart = {props.handleAddToCart} food={food}></Card>
        </div>
    );
};


export default AllCards;