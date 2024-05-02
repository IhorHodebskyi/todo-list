import { useMutation, useQueryClient } from "react-query";
import { todoServices } from "../services/todo.secvices";
import { ErrorResponse } from "../types/types";

export const DeleteById = (id: number) => {
  const queryClient = useQueryClient();
  const { isLoading: isLoadingForDeleted, mutateAsync: deleteAsync } = useMutation(
    "delete todo",
    () => todoServices.deleteById(id),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("todoList");
      },

      onError: (error: ErrorResponse) => {
        alert(error.response.data.message);
      },
    }
  );
  return { isLoadingForDeleted, deleteAsync };
};
