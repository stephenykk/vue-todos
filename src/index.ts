import utils from '@/utils';
import Todos from '@/todos.vue';

// @ts-ignore
const version = VERSION

function install(Vue: any, options: Record<string, any>) {
    debugger;
    Vue.component(Todos.name, Todos);
}

const VueTodos = {
    version,
    utils,
    install
}

export default VueTodos;
