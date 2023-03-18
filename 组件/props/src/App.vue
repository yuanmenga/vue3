<template>
  <!-- 如果组件内有两个以上兄弟节点，需要用$attrs接收 -->
  <Hdbutton content="登录" types="info"></Hdbutton>
  <Hdbutton content="禁用" types="disable" :disable="true"></Hdbutton>
  <Hdbutton :content="regirate" :types="type"></Hdbutton>
  <Hdbutton></Hdbutton>
  <hr />
  <HdbuttonData :content="regirate"> </HdbuttonData>
  <!-- 父级点击事件会影响子级数据 -->
  <!-- 如果传递的数据是对象或者数组类型子级会影响父级的数据，这是因为js的对象和数组是引用类型 -->
  <button @click="regirate = '父级登录'">父级按钮</button>
  <span>----{{ regirate }}</span>
  <hr />
  <NoProps class="hd" id="hds"></NoProps>
</template>

<script>
// @ts-nocheck
import Hdbutton from "./components/Button.vue";
import HdbuttonData from "./components/ButtonData.vue";
import NoProps from "./components/NoProps.vue";

export default {
  components: { Hdbutton, HdbuttonData, NoProps },
  data() {
    return {
      regirate: "注册",
      type: "delete",
    };
  },
};
</script>

<style lang="scss" scoped></style>
