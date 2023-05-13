<template>
  <div class="item">
    <input type="text" :value="todos.title" />
    <button @click="del(todos.id)">删除</button>
  </div>
</template>
<script setup>
import todo from "../dataReuse/todo";
let { del } = todo();
const props = defineProps({
  todos: {
    type: Object,
  },
});
</script>

<style lang="scss">
.item {
  display: flex;
  width: 50vw;
  input {
    border-color: rgb(143, 100, 208);
    padding: 10px;
    flex: 6;
  }
  button {
    flex: 1;
    margin-left: 4px;
  }
}
</style>
