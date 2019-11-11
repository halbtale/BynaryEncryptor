import Vue from 'vue';
import Clipboard from 'v-clipboard';
import App from './App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;

Vue.use(Clipboard);

new Vue({
    render: h => h(App)
}).$mount('#app');
