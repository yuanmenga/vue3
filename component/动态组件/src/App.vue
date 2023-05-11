<template>
  <div class="mainapp">
    <div class="main">
      <div
        v-for="component of componentData"
        :key="component.id"
        @click="componentId = component.name"
        :class="{ isdisplay: componentId == component.name }"
      >
        {{ component.title }}
      </div>
    </div>
    <component :is="componentId"></component>
  </div>
</template>

<script>
import Weixin from "./components/Weixin.vue";
import Pay from "./components/Pay.vue";
export default {
  components: { Weixin, Pay },
  data() {
    return {
      componentId: "Weixin",
      componentData: [
        { title: "微信", name: "Weixin", id: 1 },
        { title: "支付宝", name: "Pay", id: 2 },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.mainapp {
  padding: 20px;
  .main {
    display: flex;
    div {
      border: 1px solid rgb(237, 237, 237);
      padding: 5px;
      margin-right: 10px;
      cursor: pointer;
    }
    .isdisplay {
      transition: 0.6s;
      background-color: #109979;
      color: aliceblue;
    }
  }
}
</style>
