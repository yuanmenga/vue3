<template>
  <div>
    <span> {{ title }}</span>
    <input type="text" v-model="content" />
    {{ modelValue }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: this.modelValue,
    };
  },
  props: ["title", "modelValue"],
  emits: ["update:modelValue"],
  watch: {
    content(n, j) {
      this.$emit("update:modelValue", this.content);
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  span {
    width: 80px;
  }

  input {
    outline: none;
    border: 1px solid rgb(244, 244, 244);
  }
}
</style>
