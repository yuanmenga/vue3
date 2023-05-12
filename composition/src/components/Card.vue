<template>
  <component :is="slot[0]"></component>
  <button @click="desc">-</button>
  <span :style="attrs.style">{{ num }}</span>
  <!-- <span :style="attrs.style">{{ num }}</span> -->
  <button @click="add">+</button>
  <component :is="slot[1]"></component>
  <div>computed{{ sum }}</div>
  <button @click="changeUser('后盾人向')">{{ users }}</button>
</template>

<script>
import { ref, watchEffect, watch, computed, inject } from "vue";
export default {
  props: {
    nums: {
      type: Number,
      default: 2,
    },
  },
  emit: ["change"],
  setup(props, context) {
    const { emit, attrs, slots } = context;
    const slot = slots.default();
    //inject
    let users = inject("user", "as");
    let changeUser = inject("changeUser");
    //props
    let num = ref(props.nums); //使用ref包裹成响应式数据
    //方法定义
    let add = () => {
      num.value++; //num被包裹之后包了一层
    };
    let desc = () => {
      num.value--;
    };
    //监听
    let stop = watchEffect(() => {
      //响应式数据发生变化时才会触发watchEffect函数
      if (num.value < 0) {
        num.value = 0;
      }
      emit("change", num.value);
    });
    // stop(); //watchEffect会有一个返回值，可以关闭监听
    // watch(num, (n) => {
    //   if (num.value < 0) this.num = 0;
    // });
    //computed
    let sum = computed(() => num.value + 2);
    return { num, add, desc, attrs, slot, sum, users, changeUser };
  },
};
</script>

<style lang="scss" scoped></style>
