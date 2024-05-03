import axios from "axios";
import { Data, ITodoList } from "../types/types";

const API_URL = "http://localhost:8080/api/todo-list";

axios.defaults.baseURL = API_URL;

export const todoServices = {
  async getAll() {
    const { data } = await axios.get<ITodoList[]>("/");
    return data;
  },

  async create(data: Data) {
    return await axios.post("/", data, { headers: { "Content-Type": "application/json" } });
  },

  async updateById(id: number, data: Data) {
    return await axios.patch(`/${id}`, data, { headers: { "Content-Type": "application/json" } });
  },

  async deleteById(id: number) {
    return await axios.delete(`/${id}`);
  },
};
