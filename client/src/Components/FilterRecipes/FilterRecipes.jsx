import React, { useEffect, useRef, useState } from 'react';
import { filterByDiet } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const FilterRecipes = () => {
  const [diets, setDiets] = useState({
    // vegetarian: true,
    // glutenFree: true,
  });
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  const handleOnChange = (e) => {
    setDiets({
      ...diets,
      [e.target.value]: e.target.checked,
    });
  };

  useEffect(() => {
    //console.log(diets);
    didMountRef.current
      ? dispatch(filterByDiet(diets))
      : (didMountRef.current = true);
  }, [dispatch, diets]);

  /*BOOLEANAS
      vegetarian,
      vegan,
      glutenFree,
      dairyFree */
  /******************************************** */
  /*ARRAY
      lacto ovo vegetarian,
      pescatarian,
      paleolithic,
      fodmap friendly,
      primal,
      whole 30,
      ketogenic */

  return (
    <div>
      <div>Filter</div>
      <form>
        <input
          type='checkbox'
          name='vegetarian'
          value='vegetarian'
          onChange={handleOnChange}
        />
        <label htmlFor='vegetarian'>Vegetarian</label>
        <input
          type='checkbox'
          name='vegan'
          value='vegan'
          onChange={handleOnChange}
        />
        <label htmlFor='vegan'>Vegan</label>
        <input
          type='checkbox'
          name='gluten free'
          value='gluten free'
          onChange={handleOnChange}
        />
        <label htmlFor='gluten free'>Gluten Free</label>
        <input
          type='checkbox'
          name='dairy free'
          value='dairy free'
          onChange={handleOnChange}
        />
        <label htmlFor='dairy free'>Dairy Free</label>
        <input
          type='checkbox'
          name='lacto ovo vegetarian'
          value='lacto ovo vegetarian'
          onChange={handleOnChange}
        />
        <label htmlFor='lacto ovo vegetarian'>Lacto Ovo Vegetarian</label>
        <input
          type='checkbox'
          name='pescatarian'
          value='pescatarian'
          onChange={handleOnChange}
        />
        <label htmlFor='pescatarian'>Pescatarian</label>
        <input
          type='checkbox'
          name='paleolithic'
          value='paleolithic'
          onChange={handleOnChange}
        />
        <label htmlFor='paleolithic'>Paleolithic</label>
        <input
          type='checkbox'
          name='fodmap friendly'
          value='fodmap friendly'
          onChange={handleOnChange}
        />
        <label htmlFor='fodmap friendly'>Low FODMAP</label>
        <input
          type='checkbox'
          name='primal'
          value='primal'
          onChange={handleOnChange}
        />
        <label htmlFor='primal'>Primal</label>
        <input
          type='checkbox'
          name='whole 30'
          value='whole 30'
          onChange={handleOnChange}
        />
        <label htmlFor='whole 30'>Whole 30</label>
        <input
          type='checkbox'
          name='ketogenic'
          value='ketogenic'
          onChange={handleOnChange}
        />
        <label htmlFor='ketogenic'>Ketogenic</label>
      </form>
    </div>
  );
};

export default FilterRecipes;
