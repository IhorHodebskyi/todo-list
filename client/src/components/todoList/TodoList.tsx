import { ITodoList } from "../../types/types";
import Task from "../task/Task";

const TodoList: React.FC<{ list: ITodoList[] }> = ({ list }: { list: ITodoList[] }) => {
  return (
    <>
      <div>
        {list.map(({ id, title, description, status }) => (
          <Task id={id} title={title} description={description} status={status} />
        ))}
      </div>
    </>
  );
};

export default TodoList;
