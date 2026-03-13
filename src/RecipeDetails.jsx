import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  var { id } = useParams();
  var [recipe, setRecipe] = useState({});
  useEffect(() => {
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [id]);

  return (
    <div>
      <h1>RecipeDetails</h1>
    </div>
  );
}

export default RecipeDetails;
