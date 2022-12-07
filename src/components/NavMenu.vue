<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
</script>
<template>
  <nav>
    <div v-show="isAuthenticated">
      <div class="font-serif text-rose-500">
        Welcome, <strong>{{ user?.email }}</strong
        >.
      </div>
      <div class="links">
        <div><RouterLink to="/workspace">Workspace</RouterLink></div>
        <div><RouterLink to="/submitted">Submitted</RouterLink></div>
        <div><RouterLink to="/settings">Settings</RouterLink></div>
        <div><RouterLink to="/admin">Admin Panel</RouterLink></div>
        <div><RouterLink to="/" @click="logout()">Logout</RouterLink></div>
      </div>
    </div>

    <div v-show="!isAuthenticated">
      <RouterLink to="/">Login</RouterLink>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex h-20 items-center justify-center bg-red-800 text-slate-200;
  .links {
    @apply flex items-center justify-center space-x-4;

    & .router-link-active {
      @apply underline underline-offset-4;
    }
  }
}
</style>
