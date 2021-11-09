import { Vue } from 'vue-demi';

// const VueDemi = require('vue-demi')

// import VueTodos from '../src/index'
// import VueTodos from '../dist/index.js';

import App from './app.vue';
const VueTodos = require('../dist/index.js');

// @ts-ignore
Vue.use(VueTodos);

// @ts-ignore
console.log('%cVue.version:', 'color: green;', Vue.version);
// @ts-ignore
// window.VueTodos = VueTodos;

// @ts-ignore
new Vue({
    el: '#app',
    render: (h) => h(App)
})

export default VueTodos;