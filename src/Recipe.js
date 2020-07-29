import React from "react";
import style from './recipe.module.css';
import './App.js';


const Recipe = ({title,image, ingredients, url, history}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                {history.split(",").map(item => (
                    ingredients.map((ingredient) => (
                        //USE FILTER!!!
                         (ingredient.text.includes(item.toLowerCase()) ? <li><b>{ingredient.text}</b></li> : console.log("Doesn't match"))
                    ))
                   
                ))}
            </o1>
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>

        </div>
    )


}

export default Recipe;