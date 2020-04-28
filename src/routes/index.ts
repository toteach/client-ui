import {
  RouteConfig,
} from 'vue-router';

const router: RouteConfig[] = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: async (): Promise<typeof import('*.vue')> => import('../pages/dashboard/index.vue'),
    meta: {
      auth: true,
    },
  },
];

export default router;
