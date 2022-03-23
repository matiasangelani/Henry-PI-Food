import { React, useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { getSearchRecipes } from "../../redux/actions";

const Search = () => {
  const [input, setInput] = useState({
    search: "",
  });
  const dispatch = useDispatch();
  const didMountRef = useRef(false);

  const handleOnChange = (e) => {
    setInput({
      ...input,
      search: e.target.value,
    });
    console.log(input);
  };

  // useEffect(() => {
  //   didMountRef.current ? dispatch(getSearchRecipes(input.search)) : didMountRef.current =true
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
