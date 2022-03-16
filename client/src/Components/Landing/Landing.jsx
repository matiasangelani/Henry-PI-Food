import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <h1>Henry Food</h1>
      <Link to="/recipes">Acceder</Link>
    </>
  );
};

export default Landing;
