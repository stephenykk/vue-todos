import { h } from 'vue-demi';

export default function(...args) {
  const [type, props, ...others] = args;
  // https://vue3js.cn/docs/zh/guide/migration/render-function-api.html#_3-x-%E8%AF%AD%E6%B3%95-3

  if (props.attrs) {
    Object.assign(props, props.attrs);
    delete props.attrs;
  }
  /* 
  // vue3 h(componentOptions, ...)
    const app = utils.Vue;
    const globalComponents = app._context ? app._context.components : {};
    let targetComponent = type; 
    if(typeof type === 'string') {
      utils.eachKey(globalComponents, (cmp, name) => {
        if(utils.kabebCase(name) === utils.kabebCase(type)) {
          targetComponent = cmp;
        }
      })
    }
    return utils.h(targetComponent, props, ...others);
    
   */

  return h(type, props, ...others);
}
