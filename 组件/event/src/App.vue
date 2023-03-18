<template>
  <div>
    <Event :data="lesson" @click="show" @del="shows" v-model="titles"></Event>
    <span> {{ lesson[0].title }}---引用类型数组会自动发生变化,否则需通过v-model绑定</span>
    <hr />
    <h2>自己实现v-model</h2>
    <VModel :value="titles" @updateValue="change"></VModel>
    {{ titles }}
    <span>---父级原始数据</span>
    <h2>语法糖实现v-model</h2>
    <!-- 语法糖不需要使用change事件 -->
    <EasyVmodel v-model:value="titles"></EasyVmodel>
    <!-- :value如果是modelValue可以简写 -->
    <!-- <EasyVmodel v-model="title"></EasyVmodel> -->
    {{ titles }}
    <span>---父级原始数据</span>
  </div>
</template>

<script>
// @ts-nocheck
import EasyVmodel from './components/EasyVmodel.vue'
import db from '../data/db.js'
import Event from './components/Event.vue'
import VModel from './components/Vmodel.vue'

export default {
  components: { Event, VModel, EasyVmodel },
  data() {
    return {
      lesson: db,
      titles: '数据',
    }
  },
  methods: {
    show() {
      alert('父组件click方法')
    },
    //可以自定义事件
    shows(id) {
      if (confirm('确认删除吗')) {
        const index = this.lesson.findIndex((e) => e.id == id)
        this.lesson.splice(index, 1)
      }
    },

    //简写形式不用，只需要在父级组件内写个v-model
    change(content) {
      this.titles = content
    },
  },
}
</script>

<style lang="scss" scoped></style>
