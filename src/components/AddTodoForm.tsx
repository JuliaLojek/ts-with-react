import React, { useRef } from "react";

interface AddTodoFormProps {
  addNewTodo: (a: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = textInputRef.current!.value;
    props.addNewTodo(enteredText);
    textInputRef.current!.value = "";
  }

  return (
    <form onSubmit={submitHandler}>
      <input type="text" placeholder="Enter new todo" ref={textInputRef} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
