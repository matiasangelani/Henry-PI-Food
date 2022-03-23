import React from "react";
import { Link } from "react-router-dom";

const Recipe = ({ image, title, diets, id }) => {
  let key = 0;
  return (
    <div>
      <Link to={`/recipe/${id}`}>
        <img src={image} alt="img" />
        <p> {title} </p>
        {diets.map((d) => {
          const split = d.split(" ");

          for (let i = 0; i < split.length; i++)
            split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1);

          const diet = split.join(" ");
          key++;

          return <p key={key}> {diet} </p>;
        })}
      </Link>
    </div>
  );
};

export default Recipe;
