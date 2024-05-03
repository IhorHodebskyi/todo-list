import { useState } from "react";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { Data } from "../../types/types";
import Input from "../Input/Input";
import Button from "../Button/Button";

const TodoForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { isLoading, mutateAsync } = useCreateTodo();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value, name } = event.target as HTMLInputElement;
    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const data: Data = {
      title: title,
      description: description,
    };

    await mutateAsync(data);
    setTitle("");
    setDescription("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input labelTitle="Title" type="text" name="title" value={title} onChange={handleChange} />
        <Input
          labelTitle="Description"
          type="textarea"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <Button title="submit" type="submit" disabled={isLoading} />
      </form>
    </>
  );
};

export default TodoForm;
