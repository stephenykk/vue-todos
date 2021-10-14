import Vue from 'vue';
import VueTodos from '../src/index'
import App from './app.vue';

Vue.use(VueTodos);

new Vue({
    el: '#app',
    render: (h) => h(App)
})
