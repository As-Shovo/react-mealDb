import React from 'react';
import './Card.css'
const Card = (props) => {
    const {idMeal,strArea,strMealThumb} = props.food;
    return (
        <div>
            <div className="card-header">
                <h1>{idMeal}</h1>
                <h4>{strArea}</h4>
                <img src={strMealThumb} alt="" />
                <h1>This is </h1>
            </div>
        </div>
    );
};

export default Card;