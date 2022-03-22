import Vue from 'vue';
import App from './App.vue';
import OnestarUI from '../packages';
import '../packages/fonts/iconfont.css';

Vue.config.productionTip = false;
Vue.use(OnestarUI);

new Vue({
    render: (h) => h(App),
}).$mount('#app');
