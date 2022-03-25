import React from 'react';
import { useDispatch } from 'react-redux';
import {
  //orderRecipesDefault,
  orderRecipesAscending,
  orderRecipesDescending,
  orderRecipesByHighScore,
  orderRecipesByLowScore,
} from '../../redux/actions';
import {
  ButtonOrder,
  MenuOrder,
  ListOrder,
  ItemOrder,
} from './OrderRecipesStyled';

const OrderRecipes = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    const value = e.target.innerText;

    // console.log(e);
    // console.log(e.target.innerText);
    // console.log(value);

    value === 'Ascending'
      ? dispatch(orderRecipesAscending())
      : value === 'Descending'
      ? dispatch(orderRecipesDescending())
      : value === 'High Score'
      ? dispatch(orderRecipesByHighScore())
      : value === 'Low Score'
      ? dispatch(orderRecipesByLowScore())
      : // : value === "Default"
        // ? dispatch(orderRecipesDefault())
        console.log('error');
  };

  //console.log(order);
  //console.log(orderRecipes);

  return (
    <MenuOrder>
      <ListOrder>
        <ItemOrder>
          Select Order
          <ListOrder>
            <ItemOrder onClick={handleOnClick}>Ascending</ItemOrder>
            <ItemOrder onClick={handleOnClick}>Descending</ItemOrder>
            <ItemOrder onClick={handleOnClick}>High Score</ItemOrder>
            <ItemOrder onClick={handleOnClick}>Low Score</ItemOrder>
          </ListOrder>
        </ItemOrder>
      </ListOrder>
    </MenuOrder>
  );
};

export default OrderRecipes;
