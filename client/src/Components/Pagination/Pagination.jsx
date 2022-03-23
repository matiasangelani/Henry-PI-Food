import React from "react";

const Pagination = ({ recipesPerPage, totalRecipes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalRecipes / recipesPerPage); i++)
    pageNumbers.push(i);

  return (
    <nav>
      <ul>
        {pageNumbers.map((n) => (
          <li key={n}>
            <a href="/recipes" onClick={(e) => paginate(n, e)}>
              {n}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
