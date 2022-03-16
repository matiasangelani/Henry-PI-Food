import React from "react";
import { filterByDiet } from "../../redux/actions";
import { useDispatch } from "react-redux";

const FilterRecipes = () => {
  const dispatch = useDispatch();

  const handleOnClick = (e) => {
    console.log(e);
    console.log(e.target.checked);
    dispatch(filterByDiet([e.target.value]));
  };

  {
    /* 
    gluten free, ketogenic, vegetarian, 
    lacto ovo vegetarian, dairy free, pescatarian,fodmap friendly, whole 30*/
  }
  return (
    <div>
      <div>Filter</div>
      <form>
        <input
          type="checkbox"
          name="diet1"
          value="gluten free"
          onClick={handleOnClick}
        />
        <label htmlFor="diet1">Gluten Free</label>
        <input
          type="checkbox"
          name="diet2"
          value="ketogenic"
          onClick={handleOnClick}
        />
        <label htmlFor="diet2">Ketogenic</label>
        <input
          type="checkbox"
          name="diet3"
          value="vegetarian"
          onClick={handleOnClick}
        />
        <label htmlFor="diet3">Vegetarian</label>
        <input
          type="checkbox"
          name="diet4"
          value="lacto ovo vegetarian"
          onClick={handleOnClick}
        />
        <label htmlFor="diet4">Lacto Ovo Vegetarian</label>
        <input
          type="checkbox"
          name="diet5"
          value="vegan"
          onClick={handleOnClick}
        />
        <label htmlFor="diet5">Vegan</label>
        <input
          type="checkbox"
          name="diet6"
          value="pescatarian"
          onClick={handleOnClick}
        />
        <label htmlFor="diet6">Pescatarian</label>
        <input
          type="checkbox"
          name="diet7"
          value="paleolithic"
          onClick={handleOnClick}
        />
        <label htmlFor="diet7">Paleolithic</label>
        <input
          type="checkbox"
          name="diet8"
          value="fodmap friendly"
          onClick={handleOnClick}
        />
        <label htmlFor="diet8">Low FODMAP</label>
        <input
          type="checkbox"
          name="diet9"
          value="whole 30"
          onClick={handleOnClick}
        />
        <label htmlFor="diet9">Whole 30</label>
      </form>
    </div>
  );
};

export default FilterRecipes;
