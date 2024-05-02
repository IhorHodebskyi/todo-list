import { useState } from "react";
import { useCreateTodo } from "../../hooks/useCreateTodo";
import { Data } from "../../types/types";

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
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label className="label-title ">
          Title:
          <input type="text" name="title" value={title} onChange={handleChange} />
        </label>
        <label className="label-description">
          Description:
          <input type="textarea" name="description" value={description} onChange={handleChange} />
        </label>
        <input type="submit" disabled={isLoading} value="Submit" />
      </form>
    </>
  );
};

export default TodoForm;
