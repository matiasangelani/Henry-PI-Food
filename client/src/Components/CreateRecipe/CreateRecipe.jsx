import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiets, postRecipe } from '../../redux/actions';

const CreateRecipe = () => {
  const regexOnlyLetterAndSpace = /^[a-zA-Z\s]*$/;
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
  const [error, setError] = useState({
    errorTitle: '',
    errorPoints: '',
    errorHealthy: '',
  });

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  // const validateInput = (e) => {
  //   const successRegex = regexOnlyLetter.test(input.title);

  //   successRegex ? handleOnChange(e) : setError('Invalid characters');
  // };

  const handleOnChangeCheck = (e) => {
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

  const handleOnChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    switch (e.target.name) {
      case 'name':
        if (!regexOnlyLetterAndSpace.test(e.target.value)) {
          setError({
            ...error,
            errorTitle: 'Invalid Title',
          });
        } else {
          setError({
            ...error,
            errorTitle: '',
          });
        }
        break;
      case 'points':
        if (e.target.value < 0 || e.target.value > 100) {
          setError({
            ...error,
            errorPoints: 'Invalid Points',
          });
        } else {
          setError({
            ...error,
            errorPoints: '',
          });
        }
        break;
      case 'healthy':
        if (e.target.value < 0 || e.target.value > 100) {
          setError({
            ...error,
            errorHealthy: 'Invalid Healthy Level',
          });
        } else {
          setError({
            ...error,
            errorHealthy: '',
          });
        }
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = (e) => {
    //e.preventDefault();
    dispatch(postRecipe(input));
  };

  console.log(input);
  console.log(error);

  return (
    <form onSubmit={handleOnSubmit}>
      <input
        type='text'
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
            onChange={handleOnChangeCheck}
          />
          {d.name}
          <label htmlFor={d.name}></label>
        </div>
      ))}

      {error.errorTitle || error.errorPoints || error.errorHealthy ? (
        <button type='submit' disabled>
          Create
        </button>
      ) : (
        <button type='submit'>Create</button>
      )}
    </form>
  );
};

export default CreateRecipe;
