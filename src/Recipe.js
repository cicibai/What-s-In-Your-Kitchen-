import React from "react";
import style from './recipe.module.css';
import './App.js';


const Recipe = ({title,image, ingredients, url, history}) => {
    var requiredIngredients = [];
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {history.split(",").map(item => (
                    (item === "" ? console.log("Empty string") : 
                    ingredients.map((ingredient) => (
                         (ingredient.text.includes(item.toLowerCase()) ? <li><b>{ingredient.text}</b></li> : checkArray(requiredIngredients, ingredient.text))
                    )))))}
                    {requiredIngredients.map(requiredIngredient => 
                        <li>{requiredIngredient}</li>)}
            </ul>
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>

        </div>
    )
}

function checkArray(ingreList, ing) {
    if (!ingreList.includes(ing)) {
        ingreList.push(ing)
    }
}

export default Recipe;