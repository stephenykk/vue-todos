import Vue from 'vue';
// import VueTodos from '../src/index'
import VueTodos from 'vue-todos';
import App from './app.vue';

Vue.use(VueTodos);

console.log('%cVue.version:', 'color: green;', Vue.version);

// @ts-ignore
window.VueTodos = VueTodos;

new Vue({
    el: '#app',
    render: (h) => h(App)
})
