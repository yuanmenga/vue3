<template>
  <div>
    <suspense>
      <template #default>
        <Load></Load>
      </template>
      <template #fallback> load... </template>
    </suspense>
  </div>
</template>

<script setup>
import Load from "./components/Load.vue";
</script>

<style lang="scss" scoped></style>
