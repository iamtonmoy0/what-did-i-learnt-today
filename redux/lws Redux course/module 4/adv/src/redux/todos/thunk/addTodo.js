import { added } from "../actions";

const addTodo = (textData) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: textData,
        completed: false,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const todo = await response.json();
    console.log("todo", todo);
    dispatch(added(todo.text));
  };
};

export default addTodo;
