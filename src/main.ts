import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query';
import * as Pinia from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'; // 数据持久化
import { createSSRApp } from 'vue';
import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App);

  const pinia = Pinia.createPinia();
  pinia.use(
    createPersistedState({
      storage: {
        getItem: uni.getStorageSync,
        setItem: uni.setStorageSync,
      },
    }),
  );
  app.use(pinia);

  const queryClient = new QueryClient();
  app.use(VueQueryPlugin, { queryClient });

  return {
    app,
    Pinia,
  };
}
