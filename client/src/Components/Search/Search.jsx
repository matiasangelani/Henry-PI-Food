import { React, useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchRecipes } from '../../redux/actions';
import { InputSearch } from './SearchStyled';

const Search = () => {
  const [input, setInput] = useState({
    search: '',
  });
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  const handleOnChange = (e) => {
    setInput({
      ...input,
      search: e.target.value,
    });
  };

  useEffect(() => {
    didMountRef.current
      ? dispatch(getSearchRecipes(input.search))
      : (didMountRef.current = true);
  }, [dispatch, input]);

  return (
    <InputSearch
      size='30'
      type='text'
      placeholder='Search...'
      value={input.search}
      onChange={handleOnChange}
    />
  );
};

export default Search;
