import React from "react";
import style from './recipe.module.css';


const Recipe = ({title,image, ingredients, url}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <o1>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </o1>
            {/* <script> 
                {ingredients.map(ingredient => (
                    if (searches.includes(ingredient.text) == false) {
                        count = count + 1
                    }
                ))}
            </script> */}
            
            <img src={image} alt=""/>
            <h4><a href={url}>Click for full recipe</a></h4>


        </div>
    )


}

export default Recipe;