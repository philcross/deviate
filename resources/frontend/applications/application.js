import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import routes from './routes';
import VueRouter from 'vue-router';
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'

require('./bootstrap');

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Datetime);

const router = new VueRouter({
    routes
});

new Vue({
    router,
    render (createElement){
        return createElement(App)
    }
}).$mount('#app');
