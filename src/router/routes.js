const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', component: () => import('pages/HomePage.vue') },
      {
        path: '/about',
        name: 'about',
        component: () => import('../pages/AboutComponent.vue'),
      },
      {
        path: '/add-transaction',
        name: 'add-transaction',
        component: () => import('../pages/AddTransaction.vue'),
      },
      {
        path: '/transaction-details/:id',
        name: 'transaction-details',
        component: () => import('../pages/TransactionDetails.vue'),
      },
      {
        path: '/transactions-by-tag/:id',
        name: 'transactions-by-tag',
        component: () => import('../pages/TransactionsByTag.vue'),
      },

      {
        path: '/tags',
        name: 'tags',
        component: () => import('../pages/TagsPage.vue'),
      },
      {
        path: '/add-tag',
        name: 'add-tag',
        component: () => import('../pages/AddTag.vue'),
      },
      {
        path: '/tag-details/:id',
        name: 'tag-details',
        component: () => import('../pages/TagDetails.vue'),
      },
      {
        path: '/charts',
        name: 'charts',
        component: () => import('../pages/ChartsPage.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
