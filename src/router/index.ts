import { RouteRecordRaw, createRouter, createWebHistory, Router } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: 'canvas',
    component: () => import('/@/layout/index.vue'),
    children: [
      {
        path: 'canvas',
        components: {
          top: () => import('/@/views/canvas/top/index.vue'),
          left: () => import('/@/views/canvas/left/index.vue'),
          content: () => import('/@/views/canvas/index.vue'),
        }
      }
    ]
  },
  {
    path: '/:notfound(.*)',
    redirect: '/'
  },
];

const router: Router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;