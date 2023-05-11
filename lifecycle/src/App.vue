<template>
  <div ref="el">父组件</div>
  {{ title }}

  <button @click="show = !show">控制</button>
  <child ref="childs" v-if="show">123</child>
</template>

<script>
import child from "./components/Child.vue";
export default {
  components: { child },
  data() {
    return {
      title: "属性",
      show: true,
    };
  },
  //创建实例前：无法操作Vue实例和Dom
  beforeCreate() {
    console.log(
      `父组件beforeCreate--数据：${this.title},Dom:${this.$refs.el}` //数据：undefined,Dom:undefined
    );
  },
  //创建实例后:可操作Vue实例和无法操作Dom
  created() {
    console.log(
      `父组件created--数据：${this.title},Dom:${this.$refs.el}` //数据：属性,Dom:undefined
    );
    setTimeout(() => {
      this.title = "数据";
    }, 2000);
  },
  //Dom挂载前：可操作Vue实例和无法操作Dom
  beforeMount() {
    console.log(`父组件beforeMount--数据：${this.title},Dom:${this.$refs.el}`); //数据：属性,Dom:undefined
  },
  //Dom挂载后:可操作Vue实例和Dom
  mounted() {
    console.log(`父组件mounted--数据：${this.title},Dom:${this.$refs.el}`); //数据：属性,Dom:[object HTMLDivElement]
  },
  //更新前
  beforeUpdate() {
    console.log(`父组件beforeUpdate--数据：${this.title}`);
    console.log(this.$refs.childs, "更新前");
  },
  //更新后
  updated() {
    console.log(`父组件updated--数据：${this.title}`);
    console.log(this.$refs.childs, "更新后");
  },
};
</script>

<style lang="scss" scoped></style>
