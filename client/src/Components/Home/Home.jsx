import { React, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRecipes } from '../../redux/actions';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Search from '../Search/Search';
import FilterRecipes from '../FilterRecipes/FilterRecipes';
import OrderRecipes from '../OrderRecipes/OrderRecipes';
import Recipes from '../Recipes/Recipes';
import Pagination from '../Pagination/Pagination';
import CreateRecipe from '../CreateRecipe/CreateRecipe';
import {
  HomeContainer,
  Header,
  AsideSectionContainer,
  Aside,
  Section,
  Footer,
  PaginationContainer,
  ButtonCreate,
} from './HomeStyled';

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
    <HomeContainer>
      <Header>
        <Search />
      </Header>
      <Aside>
        <OrderRecipes />
        <FilterRecipes />
        <Link to={`/recipes/create`}>
          <ButtonCreate> Create Recipe</ButtonCreate>
        </Link>
      </Aside>
      <Section>
        {!getRecipes.length ? (
          <Loading />
        ) : (
          <Recipes currentRecipes={currentRecipes} />
        )}
        <PaginationContainer>
          <Pagination
            recipesPerPage={recipesPerPage}
            totalRecipes={recipes.length}
            paginate={paginate}
          />
        </PaginationContainer>
      </Section>
    </HomeContainer>
  );
};

export default Home;
