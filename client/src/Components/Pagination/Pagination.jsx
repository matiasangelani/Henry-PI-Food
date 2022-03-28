import React from 'react';
import {
  PaginationNav,
  NumberList,
  NumberItem,
  Number,
} from './PaginationStyled';

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  const totalPages = Math.ceil(totalRecipes / recipesPerPage);

  for (let i = 1; i <= totalPages; i++) pageNumbers.push(i);

  return (
    <PaginationNav>
      <NumberList>
        {pageNumbers.map((n) => (
          <NumberItem key={n}>
            <Number href='/recipes' onClick={(e) => paginate(n, e)}>
              {n}
            </Number>
          </NumberItem>
        ))}
      </NumberList>
    </PaginationNav>
  );
};

export default Pagination;
