<template>
  <div>
    <input type="text" :value="content" @input="change" />
    {{ content }}
  </div>
</template>

<script>
export default {
  props: ["value"],
  emits: ["updateValue"],
  data() {
    return {
      content: this.value,
    };
  },
  methods: {
    change(event) {
      console.log(event.target.value);
      this.content = event.target.value;
      this.$emit("updateValue", this.content);
    },
  },
};
</script>

<style lang="scss" scoped></style>
