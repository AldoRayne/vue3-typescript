import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/global.css";

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

createApp(App).use(store).use(router).mount("#app");
