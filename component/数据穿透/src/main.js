import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import Xinput from "./components/Xinput.vue";

const app = createApp(App);
app.component("Xinput", Xinput);
app.config.unwrapInjectedRef = true;
app.mount("#app");
