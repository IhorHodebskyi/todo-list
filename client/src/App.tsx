import "./App.css";
import TodoForm from "./components/TodoForm/TodoForm";
import TodoList from "./components/todoList/TodoList";
import { useTotoList } from "./hooks/useTodoList";

function App() {
  const { isLoading, data } = useTotoList();
  return (
    <>
      <div className="wrapper">
        <TodoForm />
        <h1>Todo List</h1>
        {isLoading && <p>Loading...</p>}
        {!isLoading && data && data.length === 0 && <h4> To-do list is empty </h4>}
        {!isLoading && data && <TodoList list={data} />}
      </div>
    </>
  );
}

export default App;
