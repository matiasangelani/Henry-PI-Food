import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import Home from "./Components/Home/Home";
//import Recipes from "./Components/Recipes/Recipes";
import RecipeDetail from "./Components/RecipeDetail/RecipeDetail";
import CreateRecipe from "./Components/CreateRecipe/CreateRecipe";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        {/* <Route exact path="/recipes" element={<Recipes />} /> */}
        <Route exact path="/recipes" element={<Home />} />
        <Route exact path="/recipe/:id" element={<RecipeDetail />} />
        <Route exact path="/recipes/create" element={<CreateRecipe />} />
      </Routes>
    </div>
  );
}

export default App;
