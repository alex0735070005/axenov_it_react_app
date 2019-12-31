import universal from 'react-universal-component';

const routes = [
  {
    component: universal(import('components/App')),
    loadData: () => new Promise(r => r({ name: 'app page data' })),
    routes: [
      {
        path: '/',
        exact: true,
        component: universal(import('components/pages/Home')),
        loadData: () => new Promise(r => r({ name: 'home page data' })),
      },
      {
        path: '/login',
        exact: true,
        component: universal(import('components/pages/Login')),
        loadData: () => new Promise(r => r({ name: 'list page data' })),
      },
      {
        path: '/personal',
        exact: true,
        component: universal(import('components/pages/Personal')),
        loadData: () => new Promise(r => r({ name: 'item page data' })),
      },
      {
        path: '/registration',
        exact: true,
        component: universal(import('components/pages/Registration')),
        loadData: () => new Promise(r => r({ name: 'item page data' })),
      },
      {
        path: '/admin',
        exact: true,
        component: universal(import('components/pages/Admin')),
        loadData: () => new Promise(r => r({ name: 'item page data' })),
      },
    ],
  },
];

export default routes;
