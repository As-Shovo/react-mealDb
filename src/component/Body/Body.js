import React, { useEffect, useState } from 'react';
import AllCards from '../AllCards/AllCards';
import './Body.css'


const Body = () => {

    const [foods, setFoods] = useState([])
    const [searchText,setSearchText] = useState([])

    const searchTextField = (event)=>{
             setSearchText(event.target.value)
           
    }
    console.log(searchText);

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    console.log(url)
   useEffect(()=>{
       fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
       .then(res => res.json())
       .then(data => setFoods(data.meals))
   },[])
   console.log(foods);

    return (
        <div className= 'b-background'>
            <div className="input-field">
                <input className='input' onChange={searchTextField} type="text" placeholder="Search Your Favorite Food" />
            </div>
            <div className="main-body">
                <div className="all-cards">
                    <h1>Total Foods : </h1>

                        <div className="cards-display">
                            {
                                foods.map(food => <AllCards key={food.idMeal} food={food}></AllCards>)
                            }
                        </div>
                    
                    
                </div>
                <div className="food-name">
                    <h1>Food name</h1>
                </div>
            </div>
        </div>
    )
};

export default Body;