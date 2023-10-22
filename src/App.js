import './App.css';
import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";

const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState("Arrabiata");
  const [recipes, setRecipes] = useState([]);

  // Function to search for the recipes
  const searchRecipes = async () => {
    setIsLoading(true);
    const url = apiUrl + query;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setRecipes(data.meals);
    setIsLoading(false);
  };

  useEffect(() => {
    searchRecipes();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    searchRecipes();
  }

  return (
    <div className="container">
      <h1>Our Recipe App</h1>

      <SearchBar 
      isLoading = {isLoading}
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      handleSubmit={handleSubmit} 
       />

      <div className="recipes">
        {recipes ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.idMeal} recipe={recipe} />
          ))
        ) : (
          "No Results."
        )}
      </div>
    </div>
  );
}

export default App;
