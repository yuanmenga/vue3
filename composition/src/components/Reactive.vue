<template>
  <div>
    <div>
      <p>ref和reactive</p>
      <button @click="changeRef">{{ refs }}</button>
      <br /><button @click="changeReactive">{{ reactives }}</button>
      <p>{{ name }}{{ age }}</p>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs } from "vue";
export default {
  setup() {
    let refs = ref(1);
    let reactives = reactive([]);
    let hd = reactive({ name: "as", age: 12 });
    let changeRef = () => {
      refs.value = 2;
    };
    let changeReactive = () => {
      reactives.push("1");
      hd.name = "你好";
      hd.age = refs.value;
    };
    return { refs, changeRef, changeReactive, reactives, ...toRefs(hd) };
  },
};
</script>

<style lang="scss" scoped></style>
