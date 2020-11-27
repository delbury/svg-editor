import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/style/index.less';
import './assets/iconfont/iconfont.css';

// 引用 antd 组件
import { Button, Menu, Dropdown, Radio } from 'ant-design-vue';

const app = createApp(App);
app.use(router).use(store);
app.use(Button).use(Menu).use(Dropdown).use(Radio);
app.mount('#app');
