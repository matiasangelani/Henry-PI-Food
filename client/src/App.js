import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Recipes from "./Components/Recipes/Recipes";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/recipes" element={<Recipes />} />
        <Route exact path="/recipe/:recipeId" element={<RecipeDetail />} />
        <Route exact path="/recipes/create" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
