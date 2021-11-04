import { Vue } from 'vue-demi';
// import VueTodos from '../src/index'
import VueTodos from 'vue-todos';
import App from './app.vue';

// @ts-ignore
Vue.use(VueTodos);
console.log('🚀 ~ file: index.ts ~ line 8 ~ VueTodos', VueTodos)

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