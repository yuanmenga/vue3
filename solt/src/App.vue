<template>
  <div>
    <Card #default="{ id }">
      <div>main插槽</div>
    </Card>
  </div>
</template>

<script>
import Card from "./components/Card.vue";
export default {
  components: { Card },
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss" scoped></style>
