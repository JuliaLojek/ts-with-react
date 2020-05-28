import React, { useState } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";

export interface Todo {
  id: string;
  text: string;
}

const App: React.FC = () => {
  const defaultTodos = [{ id: "t1", text: "Finish the course" }];

  const [todos, setTodos] = useState(defaultTodos);

  const addNewTodo = (todoText: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text: todoText,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <AddTodoForm addNewTodo={addNewTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
