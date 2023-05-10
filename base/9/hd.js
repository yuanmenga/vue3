const app = Vue.createApp({
  data() {
    return {
      name: "根组件",
    };
  },
  template: `<div>我是{{name}}</div><Zcomponent />`, //在根组件的template中调用子组件
});
app.component("Zcomponent", {
  data() {
    return {
      name: "我是子组件",
    };
  },
  template: `<div style="color:red">{{name}}</div>`,
});
const vm = app.mount("#app"); //挂载之后返回的为根组件实例，所以vm是根组件实例
console.log(vm.name); //根组件
