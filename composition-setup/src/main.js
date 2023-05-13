import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Load from "./components/Load.vue";
import Item from "./components/Item.vue";
const app = createApp(App);
app.component("Load", Load);
app.component("Item", Item);
app.mount("#app");
