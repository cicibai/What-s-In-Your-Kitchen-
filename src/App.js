import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "9d6f1293";
  const APP_KEY = "dbd604ae3d8e49c1c78890586e39d73d";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [search2, setSearch2] = useState("");
  const [search3, setSearch3] = useState("");
  const [query, setQuery] = useState("");
  const searches = [];
  var searchString = "";

  useEffect(() => {
    getRecipes();
  }, [query]);

  //Fetches all the data
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  //This causes all of the search bars to update to the same thing
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const newSearch = e => {
    setSearch2(e.target.value);
  }

  const anotherSearch = e => {
    setSearch3(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    searches.push(search);
    searches.push(search2);
    searches.push(search3);
    searchString = searches.map(search => search + '%2C');
    setQuery(searchString);
    setSearch("");
    setSearch2("");
    setSearch3("");
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
          value={search2}
          onChange={newSearch}
        /> 
        <input
          className="third-ing"
          type="text"
          placeholder="c"
          value={search3}
          onChange={anotherSearch}
        /> 
        <input
          className="fourth-ing"
          type="text"
          placeholder="d"
          //value={search}
          //onChange={updateSearch}
        /> 
        <input
          className="fifth-ing"
          type="text"
          placeholder="e"
          //value={search}
          //onChange={updateSearch}
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
            url={recipe.recipe.url}
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
