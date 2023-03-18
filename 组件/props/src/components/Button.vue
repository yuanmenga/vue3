<template>
  <div :class="[types, { disables: disable }]">{{ content }}</div>
</template>

<script>
// @ts-nocheck
export default {
  //   props: ["content"],
  props: {
    content: {
      type: String,
      default: "默认",
      // required: true, 添加该属性后必须组件必须传递content
    },
    types: {
      type: String,
      default: "",
      validator(v) {
        // @ts-ignore
        //对types的值进行限制
        return ["info", "delete", "jinyong"].includes(v);
      },
    },
    disable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
div {
  width: 50px;
  margin-top: 10px;
  text-align: center;
  background-color: #27ae60;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  //手型指针
  cursor: pointer;
  //过渡时间
  transition: 1s;
  //透明度
  opacity: 0.6;
  &:hover {
    opacity: 1;
  }
  &.info {
    background-color: blue;
  }
  &.delete {
    background-color: red;
  }
  &.jinyong {
    background-color: #aaa;
    cursor: default;
  }
  &.disables {
    background-color: #aaa;
    cursor: default;
  }
}
</style>
