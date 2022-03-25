import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Filter = () => {
  const typeDiets = useSelector((state) => state.typeDiets);
  const dispatch = useDispatch();

  return (
    <>
      {typeDiets.map((d) => (
        <div key={d.id}>
          <input
            type='checkbox'
            name={d.name}
            value={d.name}
            onChange={handleOnChange}
          />
          <label htmlFor={d.name}>{d.name}</label>
        </div>
      ))}
    </>
  );
};

export default Filter;
