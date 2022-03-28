import { Routes, Route } from 'react-router-dom';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home';
import RecipeDetail from './Components/RecipeDetail/RecipeDetail';
import CreateRecipe from './Components/CreateRecipe/CreateRecipe';
import GlobalStyled from './AppStyled';

function App() {
  return (
    <>
      <GlobalStyled />
      <Routes>
        <Route exact path='/' element={<Landing />} />
        <Route exact path='/recipes' element={<Home />} />
        <Route exact path='/recipe/:id' element={<RecipeDetail />} />
        <Route exact path='/recipes/create' element={<CreateRecipe />} />
      </Routes>
    </>
  );
}

export default App;
