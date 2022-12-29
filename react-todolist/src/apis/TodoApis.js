const URL = "http://localhost:3000/todos";

const addTodo = (newTodo) => {
  // post
  return fetch(URL, {
    method: "POST",
    body: JSON.stringify(newTodo),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
};

const removeTodo = (id) => {
  return fetch(URL + `/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
};

const saveTodo = (id, title) => {
  return fetch(URL + `/${id}`,{
    method: "PATCH",
    body: JSON.stringify({id, title}),
    headers: { "Content-Type": "application/json" },
  }).then((res) => res.json());
}
const getTodos = () => {
  return fetch(URL).then((res) => res.json());
};

export { addTodo, removeTodo, getTodos, saveTodo };
