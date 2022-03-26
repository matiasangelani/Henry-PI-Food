import React from 'react';
import { useSelector } from 'react-redux';
//import { getAllRecipes } from "../../redux/actions";
import Recipe from '../Recipe/Recipe';
// import Loading from "../Loading/Loading";
// import Search from "../Search/Search";
// import OrderRecipes from "../OrderRecipes/OrderRecipes";
// import FilterRecipes from "../FilterRecipes/FilterRecipes";
// import Pagination from "../Pagination/Pagination";
import { TitleRecipes } from './RecipesStyled';

const Recipes = ({ currentRecipes }) => {
  const getRecipes = useSelector((state) => state.getRecipes);

  // const [currentPage, setCurrentPage] = useState(1);
  // const [recipesPerPage] = useState(9);
  // const recipes = useSelector((state) => state.recipes);
  // const dispatch = useDispatch();

  // const indexOfLastRecipe = currentPage * recipesPerPage;
  // const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  // const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  // const paginate = (pageNumber, e) => {
  //   e.preventDefault();
  //   setCurrentPage(pageNumber);
  // };

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
      {/* {!getRecipes.length ? (
        <Loading />
      ) : ( */}
      <>
        {/* <header>
            <Search />
          </header>
          <aside>
            <FilterRecipes />
          </aside>
          <section>
            <OrderRecipes /> */}
        {/* <TitleRecipes>Recipes</TitleRecipes> */}
        {typeof getRecipes[0] !== 'string' ? (
          currentRecipes.map((r) => <Recipe key={r.id} {...r} />)
        ) : (
          <p> {getRecipes[0]} </p>
        )}
        {/* <Pagination
              recipesPerPage={recipesPerPage}
              totalRecipes={recipes.length}
              paginate={paginate}
            /> */}
        {/* {filterRecipes.map((r) => (
              <Recipe key={r.id} {...r} />
            ))} */}
        {/* </section> */}
      </>
      {/* )} */}
    </>
  );
};

export default Recipes;
