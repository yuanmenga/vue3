<template>
  <div style="margin-bottom: 10px">
    <h5>props是单项数据流</h5>
    <!-- 子级点击事件不会影响父级数据 -->
    <button @click="content = '子级登录'">子级按钮</button>

    <span>----props数据---{{ content }}</span>
    <!-- 正确的使用方法并不是直接使用props的数据。而是使用组件自身的相应式数据 -->
    <span>。子组件的相应式数据---{{ text }}</span>
  </div>
</template>

<script>
// @ts-nocheck

export default {
  props: {
    content: {
      type: String,
      //必填
      required: true,
    },
  },
  data() {
    return {
      text: this.content,
    };
  },
  watch: {
    //如果需要text数据随着content数据一起发生变化，需要进行监听
    content(n) {
      this.text = n;
    },
  },
};
</script>

<style lang="scss" scoped></style>
