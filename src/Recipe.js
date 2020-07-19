import React from "react";
import style from './recipe.module.css';


const Recipe = ({title,image, ingredients, url, searches}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                {ingredients.map((ingredient) => (
                    //problem is the ingredient.text contains multiple values not just the ingredient name
                    //javascript function to compare part of strings?
                    (searches.includes(ingredient.text) ? <li><b>{ingredient.text}</b></li> : <li>{ingredient.text}</li>)
                ))}
            </o1>
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>
            <h1>{ingredients.map((ingredient) => (
                console.log(ingredient.text)))}
                </h1>


        </div>
    )


}

export default Recipe;