import { useState } from "react";

import "./Todos.css";

const Todos = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "To study HTML fundamentals",
      checked: false,
    },
    {
      id: 2,
      text: "To study CSS fundamentals",
      checked: false,
    },
    {
      id: 3,
      text: "To study JS fundamentals",
      checked: false,
    },
    {
      id: 4,
      text: "To study React fundamentals",
      checked: true,
    },
  ]);

  function deleteTodo(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id != todoId);
    setTodos(filteredTodos);
  }

  function updateTodo(todoId) {
    const updateTodos = todos.map((todo) => {
      if (todo.id == todoId) {
        return {
          ...todo,
          checked: !todo.checked,
        };
        // else {
        //   return todo;
        // }
      }
    });
  }

  return (
    <div>
      <h2 className="todos-h2">Todos - {todos.length}</h2>
      <ol>
        {todos.map((todo, index) => (
          <li key={todo.id} className="todo">
            <input
              onChange={() => updateTodo(todo.id)}
              type="checkbox"
              name={todo.text}
              checked={todo.checked}
            />
            <p>{todo.text}</p>
            <div className="todo-svg">
              {" "}
              <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>
                <svg
                  width="23"
                  height="22"
                  viewBox="0 0 23 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.6112 4.125H3.48622C3.30388 4.125 3.12902 4.19743 3.00009 4.32636C2.87115 4.4553 2.79872 4.63016 2.79872 4.8125C2.79872 4.99484 2.87115 5.1697 3.00009 5.29864C3.12902 5.42757 3.30388 5.5 3.48622 5.5H4.17372V17.875C4.17372 18.2397 4.31859 18.5894 4.57645 18.8473C4.83431 19.1051 5.18405 19.25 5.54872 19.25H16.5487C16.9134 19.25 17.2631 19.1051 17.521 18.8473C17.7789 18.5894 17.9237 18.2397 17.9237 17.875V5.5H18.6112C18.7936 5.5 18.9684 5.42757 19.0974 5.29864C19.2263 5.1697 19.2987 4.99484 19.2987 4.8125C19.2987 4.63016 19.2263 4.4553 19.0974 4.32636C18.9684 4.19743 18.7936 4.125 18.6112 4.125ZM16.5487 17.875H5.54872V5.5H16.5487V17.875ZM6.92372 2.0625C6.92372 1.88016 6.99615 1.7053 7.12509 1.57636C7.25402 1.44743 7.42888 1.375 7.61122 1.375H14.4862C14.6686 1.375 14.8434 1.44743 14.9724 1.57636C15.1013 1.7053 15.1737 1.88016 15.1737 2.0625C15.1737 2.24484 15.1013 2.4197 14.9724 2.54864C14.8434 2.67757 14.6686 2.75 14.4862 2.75H7.61122C7.42888 2.75 7.25402 2.67757 7.12509 2.54864C6.99615 2.4197 6.92372 2.24484 6.92372 2.0625Z"
                    fill="#9E78CF"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Todos;
