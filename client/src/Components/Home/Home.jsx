import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";
import Search from "../Search/Search";
import FilterRecipes from "../FilterRecipes/FilterRecipes";
import OrderRecipes from "../OrderRecipes/OrderRecipes";
import Recipes from "../Recipes/Recipes";
import Pagination from "../Pagination/Pagination";
import CreateRecipe from "../CreateRecipe/CreateRecipe";

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [recipesPerPage] = useState(9);
  const getRecipes = useSelector((state) => state.getRecipes);
  const recipes = useSelector((state) => state.recipes);
  const dispatch = useDispatch();

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const paginate = (pageNumber, e) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    dispatch(getAllRecipes());
  }, [dispatch]);

  return (
    <>
      <header>
        <Search />
      </header>
      <aside>
        <FilterRecipes />
      </aside>
      <section>
        <Link to={`/recipes/create`}>
          <button> Create Recipe</button>
        </Link>
        <OrderRecipes />
        {!getRecipes.length ? (
          <Loading />
        ) : (
          <Recipes currentRecipes={currentRecipes} />
        )}
        <Pagination
          recipesPerPage={recipesPerPage}
          totalRecipes={recipes.length}
          paginate={paginate}
        />
      </section>
    </>
  );
};

export default Home;
