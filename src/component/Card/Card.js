import React from 'react';
import './Card.css'
const Card = (props) => {
    // console.log(props);
    const {idMeal,strArea,strMealThumb} = props.food;
    const handleAddToCart = props.handleAddToCart;
    return (
        <div>
            <div className="card-header">
                <h1>{idMeal}</h1>
                <h4>{strArea}</h4>
                <img src={strMealThumb} alt="" />
                <button onClick={()=>handleAddToCart(props.food)}>Click TO add Cart</button>
            </div>
        </div>
    );
};

export default Card;