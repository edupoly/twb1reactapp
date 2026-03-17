import React from "react";
import { connect } from "react-redux";

function Products(props) {
  console.log(props);
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
