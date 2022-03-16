import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllRecipes } from "../../redux/actions";
import Recipe from "../Recipe/Recipe";
import Loading from "../Loading/Loading";
import Search from "../Search/Search";
import OrderRecipes from "../OrderRecipes/OrderRecipes";
import FilterRecipes from "../FilterRecipes/FilterRecipes";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const filterRecipes = useSelector((state) => state.filterRecipes);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllRecipes());
  // }, [dispatch]);

  return (
    <>
      {/*Renderiza
            <Search/>
            <Filter/>
            <Order/>
            <Recipe/>
            <Loading/>
         */}
      {!recipes.length ? (
        <Loading />
      ) : (
        <>
          <header>
            <Search />
          </header>
          <aside>
            <FilterRecipes />
          </aside>
          <section>
            <OrderRecipes />
            <p>Recipes</p>
            {typeof recipes[0] !== "string" ? (
              recipes.map((r) => <Recipe key={r.id} {...r} />)
            ) : (
              <p> {recipes[0]} </p>
            )}
            {filterRecipes.map((r) => (
              <Recipe key={r.id} {...r} />
            ))}
          </section>
        </>
      )}
    </>
  );
};

export default Recipes;
