import React from "react";

const Recipe = ({ image, title, diets }) => {
  return (
    <div>
      <img src={image} alt="img" />
      <p> {title} </p>
      {/* {diets.map((d) => (
        <p> {d} </p>
      ))} */}
    </div>
  );
};

export default Recipe;
