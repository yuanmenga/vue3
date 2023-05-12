import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Card from "./components/Card.vue";
import Reactive from "./components/Reactive.vue";
const app = createApp(App);
app.component("Card", Card);
app.component("Reactive", Reactive);
app.mount("#app");
