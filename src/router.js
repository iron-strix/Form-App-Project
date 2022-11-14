import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/workspace', name: 'Workspace', component: () => import('@/views/WorkspacePage.vue') },
  { path: '/submitted', name: 'Submitted', component: () => import('@/views/SubmittedPage.vue') },
  { path: '/form', name: 'Form', component: () => import('@/views/FormEditPage.vue') },
  { path: '/settings', name: 'Settings', component: () => import('@/views/SettingsPage.vue') },
  { path: '/admin', name: 'Admin', component: () => import('@/views/AdminPanelPage.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
