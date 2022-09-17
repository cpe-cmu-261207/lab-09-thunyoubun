import { React, useState, useEffect, useContext } from "react";
import Todo from "./Todo";
import { IconMoon, IconSunHigh } from "@tabler/icons";
import { ThemeContext } from "../pages/context/ThemeContext";

export default function TodoCtn() {
  const [todoInput, setTodoInput] = useState("");
  const [todos, setTodos] = useState([]);

  const themes = {
    light: {
      name: "light",
      background: "white",
      foreground: "black",
    },
    dark: {
      name: "dark",
      background: "black",
      foreground: "white",
    },
  };
  const { selTheme, toggleTheme } = useContext(ThemeContext);

  //load
  useEffect(() => {
    const todoStr = localStorage.getItem("todo-react");
    if (todoStr === null) {
      setTodos([]);
      return;
    }
    setTodos(JSON.parse(todoStr));
  }, []);

  //save
  const [isFirstRender, setIsFirstRender] = useState(true);
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    const todosStr = JSON.stringify(todos);
    localStorage.setItem("todo-react", todosStr);
  }, [todos]);

  const onKeyDownHaddler = (event) => {
    if (event.key == "Enter") {
      const newTodos = [...todos, { title: todoInput, Completed: false }];
      setTodos(newTodos);
      setTodoInput("");
    }
  };

  const deleteTodo = (idx) => {
    todos.splice(idx, 1);
    const newTodos = [...todos];
    setTodos(newTodos);
  };

  const markTodo = (idx) => {
    todos[idx].Completed = !todos[idx].Completed;
    setTodos([...todos]);
  };

  const moveUp = (idx) => {
    if (idx !== 0) {
      let swap = todos[idx];
      todos[idx] = todos[idx - 1];
      todos[idx - 1] = swap;
      const newTodos = [...todos];
      setTodos([...newTodos]);
    }
  };

  const moveDown = (idx) => {
    if (idx + 1 < todos.length) {
      let swap = todos[idx];
      todos[idx] = todos[idx + 1];
      todos[idx + 1] = swap;
      const newTodos = [...todos];
      setTodos([...newTodos]);
    }
  };

  return (
    <div className="">
      <div className="d-flex">
        <input
          className="form-control mb-1 fs-4"
          placeholder="insert todo here..."
          onChange={(event) => {
            setTodoInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (todoInput !== "") onKeyDownHaddler(event);
          }}
          value={todoInput}
        />
        <button className="btn btn-dark m-2  " onClick={toggleTheme}>
          {selTheme.name === "light" ? <IconSunHigh /> : <IconMoon />}
        </button>
      </div>
      <ul>
        {todos.map((todo, i) => (
          <Todo
            title={todo.title}
            Completed={todo.Completed}
            key={todo}
            onDelete={() => deleteTodo(i)}
            onMark={() => markTodo(i)}
            onUp={() => moveUp(i)}
            onDown={() => moveDown(i)}
          />
        ))}
      </ul>

      <p className="text-center fs-4">
        <span className="text-primary">All ({todos.length}) </span>
        <span className="text-warning">
          Pending ({todos.filter((x) => x.Completed === false).length}){" "}
        </span>
        <span className="text-success">
          Completed (
          {todos.length - todos.filter((x) => x.Completed === false).length})
        </span>
      </p>

      {/* Made by section */}
      <p className="text-center mt-3 text-muted fst-italic">
        made by Thun Anuntart 620610589
      </p>
    </div>
  );
}
