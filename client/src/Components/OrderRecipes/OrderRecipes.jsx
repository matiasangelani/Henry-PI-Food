import React from "react";
import { useDispatch } from "react-redux";
import {
  //orderRecipesDefault,
  orderRecipesAscending,
  orderRecipesDescending,
  orderRecipesByHighScore,
  orderRecipesByLowScore,
} from "../../redux/actions";

const OrderRecipes = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    const value = e.target.innerText;

    // console.log(e);
    // console.log(e.target.innerText);
    // console.log(value);

    value === "Ascending"
      ? dispatch(orderRecipesAscending())
      : value === "Descending"
      ? dispatch(orderRecipesDescending())
      : value === "High Score"
      ? dispatch(orderRecipesByHighScore())
      : value === "Low Score"
      ? dispatch(orderRecipesByLowScore())
      : // : value === "Default"
        // ? dispatch(orderRecipesDefault())
        console.log("error");
  };

  //console.log(order);
  //console.log(orderRecipes);

  return (
    <div>
      <div>Select an Order</div>
      <div>
        {/* <div onClick={handleOnClick}>Default</div> */}
        <div onClick={handleOnClick}>Ascending</div>
        <div onClick={handleOnClick}>Descending</div>
        <div onClick={handleOnClick}>High Score</div>
        <div onClick={handleOnClick}>Low Score</div>
      </div>
    </div>
  );
};

export default OrderRecipes;
