<template>
  <!-- 当只有一个根组件时会默认将数据传递给跟组件 -->
  <h5>非props数据传递</h5>
  <!-- 将某一个非props数据传递给div -->
  <div :class="$attrs.class">123</div>
  <div :id="$attrs.id">123</div>
  <!-- 将所有非props数据全部传递给div -->
  <div v-bind="$attrs"></div>
</template>

<script>
// @ts-nocheck

export default {
  //取消默认赋值在根组件上
  inheritAttrs: false,
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
