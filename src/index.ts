import utils from '@/utils';
import Todos from '@/todos.vue';

const VERSION = process.env.VERSION

function install(Vue: any, options: Record<string, any>) {
    Vue.component(Todos.name, Todos);
}

const VueTodos = {
    version: VERSION,
    utils,
    install
}

export default VueTodos;
