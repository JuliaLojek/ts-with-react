import React from "react";

interface TodoListProps {
  todos: { id: string; text: string }[];
  onDeleteTodo: (todoId: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.todos.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            <button onClick={() => props.onDeleteTodo(todo.id)}>delete</button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
