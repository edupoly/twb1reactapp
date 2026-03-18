import React, { useEffect } from "react";
import { connect } from "react-redux";

function Products(props) {
  useEffect(() => {
    console.log("Products Component Rendered");
  });
  return (
    <div>
      <h1>Products</h1>
      <ul>
        {props.productsReducer.products.map((pr) => {
          return <li>{pr.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default connect((store) => store)(Products);
