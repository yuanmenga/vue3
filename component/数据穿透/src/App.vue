<template>
  <div class="main">
    <Weixin ref="weixin"></Weixin>
    <br />
    <div>
      父组件project
      <div>
        <input type="text" v-model="config" ref="hd" />
        {{ config }}
      </div>
      <button @click="getRef">获取组件和标签</button>
    </div>
  </div>
</template>

<script>
import Weixin from "./components/Weixin.vue";
import { computed } from "vue";
import config from "./data";
export default {
  methods: {
    getRef() {
      this.$refs.hd.value = "qwe";
      this.$refs.weixin.show();
    },
  },
  components: { Weixin },
  // provide: {
  //   config,
  // },
  //如果想使用data的数据需要将provide变成函数
  //使用对象数据或者computed函数将数据变成响应式的
  provide() {
    return {
      config: this.config,
    };
  },
  // provide() {
  //   return {
  //     webName: computed(() => this.name),
  //   };
  // },

  data() {
    return {
      config,
      webname: {
        name: "后盾人",
      },
      name: "后盾人name",
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 10px;
}
</style>
