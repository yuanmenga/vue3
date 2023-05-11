<template>
  <div>
    <Card
      >微信
      <template #header>
        <Xinput title="微信号" v-model="appName" style="margin-bottom: 5px">
        </Xinput>
        <Xinput title="密码" v-model="appPassword"> </Xinput
      ></template>
    </Card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appName: "后盾人",
      appPassword: "123456",
    };
  },
};
</script>

<style lang="scss" scoped></style>
