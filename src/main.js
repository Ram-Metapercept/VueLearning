import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import 'ant-design-vue/dist/reset.css';
import router from './components/router'
const app = createApp(App);
app.use(Antd)
app.use(router)
app.mount('#app');

Vue.config.productionTip = false;



// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './components/router'

// import './assets/main.css'
// import './registerServiceWorker'

// const app = createApp(App)

// app.use(router)

// app.mount('#app')