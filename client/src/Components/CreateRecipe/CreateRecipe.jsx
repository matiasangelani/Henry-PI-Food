import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiets, postRecipe } from '../../redux/actions';

const CreateRecipe = () => {
  const newRecipe = useSelector((state) => state.newRecipe);
  const typeDiets = useSelector((state) => state.typeDiets);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: '',
    dishSummary: '',
    points: '',
    healthy: '',
    instructions: '',
    diets: [],
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  // const [error, setError] = useState({
  //   errorTitle: '',
  //   errorPoints: '',
  //   errorHealthScore: '',
  //   errorInstructions: [],
  //   errorDiets: [],
  // });

  const regexOnlyLetter = /[a-zA-Z]\s+/;

  // const validateInput = (e) => {
  //   const successRegex = regexOnlyLetter.test(input.title);

  //   successRegex ? handleOnChange(e) : setError('Invalid characters');
  // };

  const handleOnChange = (e) => {
    if (e.target.checked) {
      setInput({
        ...input,
        diets: [...input.diets, e.target.value],
      });
    } else if (input.diets.includes(e.target.value)) {
      setInput({
        ...input,
        diets: input.diets.filter((d) => d !== e.target.value),
      });
    } else {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleOnSubmit = (e) => {
    //e.preventDefault();
    dispatch(postRecipe(input));
  };
  // const border = {
  //   border: 'red 1px solid',
  // };

  console.log(input);
  console.log('CreateRecipe', newRecipe);
  console.log('Diets', typeDiets);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
        // style={error && border}
        name='name'
        placeholder='Title'
        value={input.name}
        onChange={handleOnChange}
      />
      <textarea
        name='dishSummary'
        cols='30'
        rows='10'
        placeholder='Summary'
        value={input.dishSummary}
        onChange={handleOnChange}
      ></textarea>
      <input
        type='number'
        name='points'
        placeholder='Points'
        onChange={handleOnChange}
      />
      <input
        type='number'
        name='healthy'
        placeholder='Healthy level'
        onChange={handleOnChange}
      />

      <textarea
        name='instructions'
        cols='30'
        rows='10'
        placeholder='Instructions'
        value={input.instructions}
        onChange={handleOnChange}
      ></textarea>

      {typeDiets.map((d) => (
        <div key={d.id}>
          <input
            type='checkbox'
            name={d.name}
            value={d.name}
            onChange={handleOnChange}
          />
          {d.name}
          <label htmlFor='vegetarian'></label>
        </div>
      ))}

      <button type='submit'>Create</button>
    </form>
  );
};

export default CreateRecipe;
