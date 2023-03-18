<template>
  <div>
    <input type="text" :value="content" @input="change" />
    {{ content }}
    <span>---子级数据</span>
  </div>
</template>

<script>
export default {
  //简写
  //   props: ["modelValue"],
  props: ["value"],
  //注意必须满足这种形式才可以
  emits: ["update:value"],
  //简写
  //   emits: ["update:modelValue"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    change(event) {
      console.log(event.target.value);
      this.content = event.target.value;
      //简写
      this.$emit("update:value", this.content);
      //   this.$emit("update:modelValue", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
