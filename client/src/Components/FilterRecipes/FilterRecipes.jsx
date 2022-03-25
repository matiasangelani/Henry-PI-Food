import React, { useEffect, useRef, useState } from 'react';
import { filterByDiet } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import {
  ConteinerFilters,
  ContainerLabelInput,
  LabelFilter,
  InputFilter,
  SliderFilter,
} from './FilterStyled';

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
    <ConteinerFilters>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          id='vegetarian'
          name='vegetarian'
          value='vegetarian'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='vegetarian' />
        <SliderFilter>Vegetarian</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='vegan'
          value='vegan'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='vegan' />
        <SliderFilter>Vegan</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='gluten free'
          value='gluten free'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='gluten free' />
        <SliderFilter>Gluten Free</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='dairy free'
          value='dairy free'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='dairy free' />
        <SliderFilter>Dairy Free</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='lacto ovo vegetarian'
          value='lacto ovo vegetarian'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='lacto ovo vegetarian' />
        <SliderFilter>Lacto Ovo Vegetarian</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='pescatarian'
          value='pescatarian'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='pescatarian' />
        <SliderFilter>Pescatarian</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='paleolithic'
          value='paleolithic'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='paleolithic' />
        <SliderFilter>Paleolithic</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='fodmap friendly'
          value='fodmap friendly'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='fodmap friendly' />
        <SliderFilter>Low FODMAP</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='primal'
          value='primal'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='primal' />
        <SliderFilter>Primal</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='whole 30'
          value='whole 30'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='whole 30' />
        <SliderFilter>Whole 30</SliderFilter>
      </ContainerLabelInput>
      <ContainerLabelInput>
        <InputFilter
          type='checkbox'
          name='ketogenic'
          value='ketogenic'
          onChange={handleOnChange}
        />
        <LabelFilter htmlFor='ketogenic' />
        <SliderFilter>Ketogenic</SliderFilter>
      </ContainerLabelInput>
    </ConteinerFilters>
  );
};

export default FilterRecipes;
