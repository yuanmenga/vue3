const { createApp } = Vue;
createApp({
  data() {
    return {
      title: "后盾",
    };
  },
  //存在template就会渲染template的内容
  template: `<h1>{{title}}</h1>`,
}).mount("#app");
