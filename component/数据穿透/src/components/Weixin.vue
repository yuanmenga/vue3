<template>
  <div>
    子组件inject
    <div><Xinput /></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    show() {
      alert("我是子组件方法");
    },
  },
};
</script>

<style lang="scss" scoped></style>
