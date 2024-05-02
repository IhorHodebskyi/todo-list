import { useMutation, useQueryClient } from "react-query";
import { todoServices } from "../services/todo.secvices";
import { Data, ErrorResponse } from "../types/types";

export const useCreateTodo = () => {
  const queryClient = useQueryClient();

  const { isLoading, mutateAsync } = useMutation("create todo", (data: Data) => todoServices.create(data), {
    onSuccess: () => {
      queryClient.invalidateQueries("todoList");
    },

    onError: (error: ErrorResponse) => {
      alert(error.response.data.message);
    },
  });
  return { isLoading, mutateAsync };
};
