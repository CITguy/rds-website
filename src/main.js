import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router';
import routes from './routes'

Vue.use(Router);

Vue.config.productionTip = false
Vue.config.ignoredElements = [
    /^hx-/, /* ignore HelixUI custom elements */
];

let router = new  Router({
    mode: 'history',
    linkExactActiveClass: 'current', // matches defined HelixUI class
    routes
});

let vueApp = new Vue({
    router,
    render: h => h(App)
});

document.addEventListener('WebComponentsReady', function () {
    vueApp.$mount('#app')
});

