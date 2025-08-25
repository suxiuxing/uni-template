/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<object, object, any>;
  export default component;
}

interface ImportMetaEnv {
  readonly VITE_APP_BASE: string;
  readonly VITE_APP_TITLE: string;
  readonly VITE_APPID_UNI: string;
  readonly VITE_APPID_WX: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
