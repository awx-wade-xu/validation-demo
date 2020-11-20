import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/v2', component: '@/pages/v2' },
  ],

  proxy: {
    '/proxy': {
      target: 'http://awx-dev-47.awx.im:5882/',
      changeOrigin: true,
      pathRewrite: { '^/proxy': '/api' },
    },
  },
});
