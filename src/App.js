import "./App.css";
import { useEffect, useState } from "react";
import { Recipe } from "./Recipe.js";

const App = () => {
  const API_ID = "d6f04791";
  const API_KEY = "b388614a7638b9729b35e6186f8193fb";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  const updateSearch = (e) => {
    setSearch(e.target.value);
    console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App" style={{ margin: "5rem" }}>
      <form onSubmit={getSearch} className="search-form">
        <input
          className="search-bar"
          type=""
          value={search}
          onChange={updateSearch}
        />
        <button className="search-button" type="submit">
          <i class="fas fa-search"></i>
        </button>
      </form>
      <article
        style={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </article>
    </div>
  );
};

export default App;
