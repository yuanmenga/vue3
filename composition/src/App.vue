<template>
  <div>
    <Card :nums="3" @change="appEvent" ref="compont" style="color: aqua">
      <div>你好</div>
      <div>yuans</div>
      <div>yuans</div>
    </Card>
    <Reactive></Reactive>
  </div>
</template>

<script>
import { ref, provide } from "vue";
export default {
  setup() {
    let user = ref("后盾人");
    provide("user", user);
    provide("changeUser", (nValue) => (user.value = nValue));

    let compont = ref();
    let appEvent = () => {
      console.log(compont.value?.num, "子组件数据");
    };
    setTimeout(() => {
      user.value = "你好";
    }, 2000);
    return { appEvent, compont };
  },
};
</script>

<style lang="scss" scoped></style>
