import allproducts from "./products.json";
const initialState = {
  products: allproducts.products,
};
function productsReducer(state = initialState, action) {
  return state;
}

export default productsReducer;
