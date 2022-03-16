import { React, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getSearchRecipes } from "../../redux/actions";

const Search = () => {
  const [input, setInput] = useState({
    search: "",
  });
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    setInput({
      ...input,
      search: e.target.value,
    });
    console.log(input);
  };

  // useEffect(() => {
  //   return () => dispatch(getSearchRecipes(input.search));
  // }, [dispatch, input]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={input.search}
      onChange={handleOnChange}
    />
  );
};

export default Search;
