import { ITodoList } from "../../types/types";
import Task from "../task/Task";

const TodoList: React.FC<{ list: ITodoList[] }> = ({ list }: { list: ITodoList[] }) => {
  return (
    <>
      <ul>
        {list.map(({ id, title, description, status }) => (
          <li>
            <Task id={id} title={title} description={description} status={status} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
