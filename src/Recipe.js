import React from "react";
import style from './recipe.module.css';
import './App.js';


const Recipe = ({title,image, ingredients, url, history}) => {
    var hasIngredient = [];
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {history.split(",").map(item => (
                    (item === "" ? console.log("Empty string") : 
                    ingredients.map((ingredient) => (
                         (ingredient.text.includes(item.toLowerCase()) ? checkArray(hasIngredient, ingredients, ingredient) : null)
                    )))))}
                    {hasIngredient.map(ingredient => 
                        <li><b>{ingredient}</b></li>)}

                    {ingredients.map(ingredient => 
                        <li>{ingredient.text}</li>)}
            </ul>
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>

        </div>
    )
}

function checkArray(ingreList, fullList, ing) {
    if (!ingreList.includes(ing.text)) {
        ingreList.push(ing.text)
    }
    removeItem(fullList, ing)
}

function removeItem(ingredientList, ingre) {
    const index = ingredientList.indexOf(ingre);
    if (index > -1) {
        ingredientList.splice(index, 1)
    }
}


export default Recipe;