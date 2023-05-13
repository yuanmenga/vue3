import user from "../api/user";
import { ref } from "vue";
const todos = ref([]);
const userApi = user();
export default () => {
  const onload = async () => {
    todos.value = await userApi.get();
  };
  const del = async (id) => {
    await userApi.delete(id);
    onload();
  };
  const add = async (data) => {
    await userApi.add(data);
    onload();
  };

  return { del, onload, todos, add };
};
