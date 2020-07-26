import React from "react";
import style from './recipe.module.css';
import './App.js';


const Recipe = ({title,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                {ingredients.map((ingredient) => (
                    //the ingredient needs to include the entire string given to it
                    (ingredient.text.includes(title.substr(0, title.indexOf(" ")).toLowerCase()) ? <li><b>{ingredient.text}</b></li> : <li>{ingredient.text}</li>)
                ))}
            </o1>
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>

        </div>
    )


}

export default Recipe;