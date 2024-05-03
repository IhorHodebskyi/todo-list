import { useState } from "react";
import { Data, ITodoList } from "../../types/types";
import { UpdateById } from "../../hooks/updateById";
import Button from "../Button/Button";
import { DeleteById } from "../../hooks/deleteTodo";
import Select from "../Select/Select";

const Task: React.FC<ITodoList> = ({ id, title, description, status }) => {
  const [isValue, setIsValue] = useState(status ? status.status : "");

  const { isLoading, mutateAsync } = UpdateById(id);
  const { isLoadingForDeleted, deleteAsync } = DeleteById(id);

  const handelCheng: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
    const { value } = event.target;
    const data: Data = {
      status: value,
    };
    setIsValue(value);
    mutateAsync(data);
  };

  const handleClick = async (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    event.preventDefault();
    await deleteAsync();
  };

  return (
    <>
      <div key={id} className={`${isValue} wrapper-todo`}>
        <form>
          <div className="form-group">
            <Select isValue={isValue} handelCheng={handelCheng} isLoading={isLoading} />
          </div>

          <Button title="Delete" type="submit" disabled={isLoadingForDeleted} onClick={handleClick} />
        </form>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Task;
