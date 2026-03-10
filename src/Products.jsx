import React from "react";
import ProductCard from "./ProductCard";
function Products() {
  const [prods, setProducts] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts([...data.products]);
      });
  }, []);

  return (
    <div className="mybox d-flex flex-wrap gap-2">
      {prods?.map((p) => {
        return <ProductCard product={p}></ProductCard>;
      })}
    </div>
  );
}

export default Products;
