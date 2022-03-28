import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, postRecipe } from '../../redux/actions';
import {
  ContainerForm,
  Form,
  Input,
  InputDiet,
  LabelDiet,
  TextArea,
  DietsContainer,
  Submit,
  DivDiet,
  InputError,
  ErrorContainer,
} from './CreateRecipeStyled';

const CreateRecipe = () => {
  const regexOnlyLetterAndSpace = /^[a-zA-Z\s]*$/;
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
  const errorStyle = {
    border: '2px solid #8f0000',
  };

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

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
    dispatch(postRecipe(input));
  };

  return (
    <ContainerForm>
      <Form onSubmit={handleOnSubmit} autocomplete='off'>
        {error.errorTitle ? (
          <ErrorContainer>
            <Input
              style={errorStyle}
              autocomplete='off'
              type='text'
              name='name'
              placeholder='Title'
              value={input.name}
              onChange={handleOnChange}
            />
            <InputError>Only letters and spaces</InputError>
          </ErrorContainer>
        ) : (
          <ErrorContainer>
            <Input
              autocomplete='off'
              type='text'
              name='name'
              placeholder='Title'
              value={input.name}
              onChange={handleOnChange}
            />
          </ErrorContainer>
        )}
        <TextArea
          name='dishSummary'
          cols='30'
          rows='10'
          placeholder='Summary'
          value={input.dishSummary}
          onChange={handleOnChange}
        ></TextArea>

        {error.errorPoints ? (
          <ErrorContainer>
            <Input
              style={errorStyle}
              type='number'
              name='points'
              placeholder='Points'
              onChange={handleOnChange}
            />
            <InputError>Only greater than 0 and smaller than 100</InputError>
          </ErrorContainer>
        ) : (
          <ErrorContainer>
            <Input
              type='number'
              name='points'
              placeholder='Points'
              onChange={handleOnChange}
            />
          </ErrorContainer>
        )}
        {error.errorHealthy ? (
          <ErrorContainer>
            <Input
              style={errorStyle}
              type='number'
              name='healthy'
              placeholder='Healthy level'
              onChange={handleOnChange}
            />
            <InputError>Only greater than 0 and smaller than 100</InputError>
          </ErrorContainer>
        ) : (
          <ErrorContainer>
            <Input
              type='number'
              name='healthy'
              placeholder='Healthy level'
              onChange={handleOnChange}
            />
          </ErrorContainer>
        )}

        <TextArea
          name='instructions'
          cols='30'
          rows='10'
          placeholder='Instructions'
          value={input.instructions}
          onChange={handleOnChange}
        ></TextArea>

        <DietsContainer>
          {typeDiets.map((d) => (
            <DivDiet key={d.id}>
              <InputDiet
                type='checkbox'
                id={d.name}
                name={d.name}
                value={d.name}
                onChange={handleOnChangeCheck}
              />

              <LabelDiet htmlFor={d.name}>{d.name}</LabelDiet>
            </DivDiet>
          ))}
        </DietsContainer>

        {!input.name ||
        !input.dishSummary ||
        error.errorTitle ||
        error.errorPoints ||
        error.errorHealthy ? (
          <Submit type='submit' disabled>
            Create
          </Submit>
        ) : (
          <Submit type='submit'>Create</Submit>
        )}
      </Form>
    </ContainerForm>
  );
};

export default CreateRecipe;
