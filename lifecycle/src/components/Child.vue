<template>
  <div ref="child"><slot /></div>
</template>

<script>
export default {
  data() {
    return {
      title: "子级属性",
      timeID: "",
    };
  },
  //创建实例前
  beforeCreate() {
    console.log(
      `子组件beforeCreate--数据：${this.title},Dom:${this.$refs.child}` //数据：undefined,Dom:undefined
    );
  },
  //创建实例后
  created() {
    console.log(`子组件created--数据：${this.title},Dom:${this.$refs.child}`); //数据：子级属性,Dom:undefined
    // this.timeID = setInterval(() => {
    //   console.log(111);
    // }, 1000);
  },
  //Dom挂载前
  beforeMount() {
    console.log(
      `子组件beforeMount--数据：${this.title},Dom:${this.$refs.child}` //数据：子级属性,Dom:undefined
    );
  },
  //Dom挂载前
  mounted() {
    console.log(
      `子组件beforeMount--数据：${this.title},Dom:${this.$refs.child}` //数据：子级属性,Dom:[object HTMLDivElement]
    );
  },
  //销毁前
  beforeUnmount() {
    console.log(
      `子组件beforeUnmount--数据：${this.title}--Dom:${this.$refs.child}`
    );
  },
  //销毁后
  unmounted() {
    console.log(
      `子组件unmounted--数据：${this.title}--Dom:${this.$refs.child}`
    );
    clearInterval(this.timeID);
  },
};
</script>

<style lang="scss" scoped></style>
