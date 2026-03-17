//state
const initialState = {
  todos: ["goto gym", "eat bananas", "do yoga"],
};

//action
function todoReducer(state = initialState, action) {
  if (action.type == "ADDTODO") {
    return { todos: [...state.todos, action.payload] };
  }
  if (action.type == "DELETETODO") {
    var temp = state.todos.filter((todo, i) => {
      return i != action.payload;
    });
    return { todos: [...temp] };
  }
  return state;
}
export default todoReducer;
