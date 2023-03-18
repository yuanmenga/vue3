<template>
  <div class="eventlist">
    <div v-for="(datas, index) in data" :key="index" class="imgbox">
      <img :src="datas.preview" alt="" />
      <span @click="$emit('del', datas.id)">x</span>
      <!-- 点击enter和失去焦点时输入框取消 -->
      <input type="text" v-model="datas.title" v-if="datashow" @keyup.enter="change" @blur="change" />
      <h3 v-else @dblclick="datashow = true">
        {{ datas.title }}
      </h3>
    </div>
  </div>
</template>

<script>
// @ts-nocheck

export default {
  data() {
    return {
      titles: this.modelValue,
      datashow: false,
    }
  },
  inheritAttrs: false,

  // @ts-ignore
  emits: {
    //什么也不操作
    'update:modelValue': null,
    click: null,
    del(id) {
      if (/^\d+$/.test(id)) {
        return true
      }
      console.error('del 需要数值')
    },
  },

  props: {
    modelValue: null,
    data: {
      type: Array,
    },
  },
  methods: {
    change(event) {
      this.datashow = false
      console.log(event.target.value)
      this.titles = event.target.value
      console.log(this.titles)
      //简写
      this.$emit('update:modelValue', this.titles)
    },
  },
}
</script>

<style lang="scss" scoped>
.eventlist {
  .imgbox {
    display: inline-block;
    position: relative;
    height: 450px;

    h3 {
      position: absolute;
      top: 380px;
      left: 350px;
      // display: flex;
      // justify-content: center;
      // align-items: center;
    }
    input {
      position: absolute;
      top: 400px;
      left: 295px;
    }
    &:hover {
      span {
        opacity: 1;
      }
    }
    img {
      border: 1px solid #ddd;
      text-align: center;
      transition: 1s;
      margin-right: 20px;
      &:hover {
        box-shadow: 0 0 20px #aaa;
      }
    }
    span {
      display: block;
      background-color: #666;
      color: #fff;
      position: absolute;
      top: 15px;
      right: 25px;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      opacity: 0;
      transition: 1s;
      &:hover {
        cursor: pointer;
      }
    }
  }
  // img {
  //   width: 600px;
  //   height: auto;
  //   margin-right: 20px;
  //   border: solid 1px #ddd;
  //   transition: 1s;
  //   &:hover {
  //     box-shadow: 0 0 20px #aaa;
  //   }
  // }
}
</style>
