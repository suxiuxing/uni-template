import uni from '@dcloudio/vite-plugin-uni';
import Components from '@uni-helper/vite-plugin-uni-components';
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers';
import UniManifest from '@uni-helper/vite-plugin-uni-manifest';
import Optimization from '@uni-ku/bundle-optimizer';
import process from 'node:process';
import { defineConfig, loadEnv } from 'vite';
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite';
import { WeappTailwindcssDisabled } from './platform.ts';
import postcssPlugins from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_APP_BASE } = loadEnv(mode, process.cwd());

  return {
    base: VITE_APP_BASE,
    plugins: [
      UniManifest(),
      Components({
        resolvers: [WotResolver()],
      }),
      uni(),
      UnifiedViteWeappTailwindcssPlugin({
        rem2rpx: true,
        disabled: WeappTailwindcssDisabled,
      }),
      Optimization({
        enable: {
          optimization: true,
          'async-import': true,
          'async-component': true,
        },
        dts: {
          enable: true,
          base: './',
          'async-import': {
            enable: true,
            base: './',
            name: 'async-import.d.ts',
            path: './async-import.d.ts',
          },
          'async-component': {
            enable: true,
            base: './',
            name: 'async-component.d.ts',
            path: './async-component.d.ts',
          },
        },
        logger: true,
      }),
    ],
    // 内联 postcss 注册 tailwindcss
    css: {
      postcss: {
        plugins: postcssPlugins,
      },
      // https://vitejs.dev/config/shared-options.html#css-preprocessoroptions
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['legacy-js-api'],
        },
      },
    },
  };
});
