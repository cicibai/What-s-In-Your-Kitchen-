import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "9d6f1293";
  const APP_KEY = "dbd604ae3d8e49c1c78890586e39d73d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  

  return ( 
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <div class="search-container">
        <input
          className="first-ing"
          type="text"
          placeholder="a"
          value={search}
          onChange={updateSearch}
        /> 
        <input
          className="second-ing"
          type="text"
          placeholder="b"
          value={search}
          onChange={updateSearch}
        /> 
        <input
          className="third-ing"
          type="text"
          placeholder="c"
          value={search}
          onChange={updateSearch}
        /> 
        <input
          className="fourth-ing"
          type="text"
          placeholder="d"
          value={search}
          onChange={updateSearch}
        /> 
        <input
          className="fifth-ing"
          type="text"
          placeholder="e"
          value={search}
          onChange={updateSearch}
        /> 

        <button className="search-button" type="submit">
          Search
        </button>

        </div>
      </form>

      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>

      <div className="question">
            <h1>
                So What’s in the Kitchen?
            </h1>

            <p1>
                Tell us five ingredients you want to use up!
            </p1>
      </div>
    </div>
  );
};

export default App;
