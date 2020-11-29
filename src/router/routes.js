
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Home', component: () => import('pages/home/') },
      { path: '/signin', name: 'Signin', component: () => import('pages/signinPage') },
      { path: '/signup', name: 'Signup', component: () => import('pages/signupPage') },
      {
        path: '/uploads', component: () => import('pages/uploads'),
        children: [
          { path: '', name: 'Uploads', component: () => import('../pages/uploads/uploadPhotoIdFront') },
        ]
      },
      { path: '/share', name: 'Share', component: () => import('pages/share') },
      { path: '/verifications', name: 'Verifications', component: () => import('pages/verifications') },
      { path: '/identities', name: 'Identities', component: () => import('pages/identities') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
