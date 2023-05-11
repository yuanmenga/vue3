<template>
  <div>
    <input type="text" v-model="config.title" />
    <input type="text" v-model="config.name" />
    <input type="text" v-model="config.site" />
  </div>
</template>

<script>
export default {
  inject: ["config"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
