<template>
  <div class="add">
    <input
      type="text"
      placeholder="请输入回车上传"
      @keyup.enter="upload"
      v-model="title"
    />
  </div>
</template>

<script setup>
import todo from "../dataReuse/todo";
import { ref } from "vue";
let title = ref();
let upload = () => {
  todo().add({ title: title.value });
};
</script>

<style lang="scss">
.add {
  display: flex;
  width: 50vw;
  input {
    border-color: rgb(143, 100, 208);
    flex: 1;
    height: 30px;
  }
}
</style>
