import { useQuery } from "react-query";
import { todoServices } from "../services/todo.secvices";
import { ErrorResponse } from "../types/types";

export const useTotoList = () => {
  const { isLoading, data } = useQuery("todoList", () => todoServices.getAll(), {
    onError: (error: ErrorResponse) => {
      alert(error.response.data.message);
    },
  });
  return { isLoading, data };
};
