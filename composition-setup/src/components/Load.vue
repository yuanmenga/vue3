<template>
  <div class="load">
    <Item
      v-for="todo of todos"
      :key="todo.id"
      :todos="todo"
      @del="deletes"
      class="Item"
    ></Item>
    <Add></Add>
  </div>
</template>

<script setup>
import Item from "./Item.vue";
import Add from "./Add.vue";
import todo from "../dataReuse/todo";
let { onload, todos } = todo();
onload();
</script>

<style lang="scss">
.load {
  .Item {
    margin-bottom: 5px;
  }
}
</style>
