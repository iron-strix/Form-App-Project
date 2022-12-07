import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import FormEditPage from '@/views/FormEditPage.vue'

import { useAuth } from '@/composables/useAuth'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/workspace', name: 'Workspace', component: () => import('@/views/WorkspacePage.vue') },
  { path: '/submitted', name: 'Submitted', component: () => import('@/views/SubmittedPage.vue') },
  { path: '/form/:id', name: 'Form', component: FormEditPage },
  { path: '/settings', name: 'Settings', component: () => import('@/views/SettingsPage.vue') },
  { path: '/admin', name: 'Admin', component: () => import('@/views/AdminPanelPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value)
    next({
      name: 'Login',
      query: { redirect: to.fullPath },
    })
  else next()
})

export default router
