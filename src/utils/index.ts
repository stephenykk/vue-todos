import tools from './tools';
import weixin from './weixin';
import dingtalk from './dingtalk';
import { sourceCodeEnum } from '../../types/enums';

export default {
  Vue: null, // Vue or app  (vue2 -> Vue; vue3 -> app)
  h: null, // Vue3 需传入 h 方法
  h3: null, // 参数兼容版的h 
  isVue3: false,
  geth(h2: (...args: any[]) => any) {
    return this.isVue3 ? this.h3 : h2;
  },
  ...tools,
  weixin,
  dingtalk,
  sourceCodeEnum
};
