// 命名空间 简写为 OD
declare namespace OD {
  interface LoadScript {
    (src: string, allowOnlyOne: boolean): Promise<any>;
    _cachePromises?: {
      [index: string]: Promise<any>;
    };
  }

  type Fn = (...args: any[]) => any;

  type Script = HTMLScriptElement & {
    onreadystatechange: Fn;
    readyState: string;
  };

  interface GetQuery {
    (url?: string): Record<string, any>;
    _cache?: Record<string, any>;
  }

  type sourceCodeEnum = import('./enums').sourceCodeEnum;

  type Env = 'dev' | 'tcstress' | 'stg' | 'prod';
}

declare interface Window {
  env: any;
}

declare module "*.vue" {
  const Component : {
    name: string
  }
  export default Component;
}

declare module 'vue-todos' {
  type Vue = any;
  type Env = 'dev' | 'prod' | 'test';

  interface Install {
    (vue: Vue, config: Record<string, any>, component?: any): void;
  }


  const VueTodos: {
    version: string;
    env: Env;
    install: Install;
  }

  export default VueTodos;
}
