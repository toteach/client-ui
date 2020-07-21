import {
  RouteConfig,
} from 'vue-router';


const router: RouteConfig[] = [
  {
    path: '/',
    name: 'app',
    component: async (): Promise<typeof import('*.vue')> => import('../App.vue'),
  },
];

export default router;
