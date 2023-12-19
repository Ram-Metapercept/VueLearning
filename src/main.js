import { createApp } from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import "ant-design-vue/dist/reset.css";
import router from "./router";
import CanvasJSChart from "@canvasjs/vue-charts";

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(CanvasJSChart);
app.mount("#app");
