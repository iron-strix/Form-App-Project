import { createRouter, createWebHistory } from 'vue-router'

import LoginPage from '@/views/LoginPage.vue'
import FormEditPage from '@/views/FormEditPage.vue'

import { useAuth } from '@/composables/useAuth'
import FormResponseVue from './views/FormResponse.vue'
import FormList from '@/views/FormList.vue'
import ViewResponse from '@/views/ViewResponse.vue'

const { isAuthenticated } = useAuth()

const routes = [
  { path: '/', name: 'Login', component: LoginPage },
  { path: '/workspace', name: 'Workspace', component: () => import('@/views/WorkspacePage.vue') },
  { path: '/submitted', name: 'Submitted', component: () => import('@/views/SubmittedPage.vue') },
  { path: '/form/:id', name: 'Form', component: FormEditPage },
  { path: '/formList/', name: 'Form Responses List', component: FormList },
  { path: '/formResponse/:id', name: 'Form Response', component: FormResponseVue },
  { path: '/viewResponse/:id', name: 'View Response', component: ViewResponse },
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
