import React from "react";

import { Link, useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  /* Here programmatically on a button click triggering a function, and inside we have actual code that navigate page.
  Better is TO USE LINK instead of this approach.
  BUT this is how you would navigate programmatically if you need to do, for example if timer expired or anything else  */

  function navigateHandler() {
    navigate("/products");
  }

  return (
    <>
      <h1> My Home Page</h1>
      <p>
        Go to <Link to="/products">The list of Products </Link>
      </p>
      <p>
        <button onClick={navigateHandler}> Navigate </button>
      </p>
    </>
  );
}

export default HomePage;
