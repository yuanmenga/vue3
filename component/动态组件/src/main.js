import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Card from "./components/Card.vue";
import Xinput from "./components/Xinput.vue";

const app = createApp(App);
app.component("Card", Card); //注册全局组件
app.component("Xinput", Xinput);
app.mount("#app");
