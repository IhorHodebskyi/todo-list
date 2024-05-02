// import { useQuery } from "react-query";
// import { todoServices } from "../services/todo.secvices";

// export const useToto = (id?: string | undefined) => {
//   const { isLoading, data } = useQuery(["todoList", id], () => todoServices.getById(String(id)), {
//     onError: (error) => {
//       alert(error);
//     },
//     enabled: !!id,
//   });
//   return { isLoading, data };
// };
