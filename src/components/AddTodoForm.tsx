import React, { useState, ChangeEvent } from "react";

interface AddTodoFormProps {
  addNewTodo: (a: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = (props) => {
  const [newTodoText, setNewTodoText] = useState("");

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setNewTodoText(event.target.value);
  }

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    props.addNewTodo(newTodoText);
    setNewTodoText("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter new todo" value={newTodoText} onChange={inputChangeHandler} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
