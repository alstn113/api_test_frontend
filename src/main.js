import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
import mixins from "./mixins";
import { store } from "./store/store";

const app = createApp(App).use(router);
app.mixin(mixins);
app.use(VueSweetalert2);
app.use(store);
app.mount("#app");
