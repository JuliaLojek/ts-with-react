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

  const todoAddHandler = (todoText: string) => {
    const newTodo: Todo = {
      id: Math.random().toString(),
      text: todoText,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const todoDeleteHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== todoId;
      });
    });
  };

  return (
    <div className="App">
      <AddTodoForm onAddTodo={todoAddHandler} />
      <TodoList todos={todos} onDeleteTodo={todoDeleteHandler} />
    </div>
  );
};

export default App;
