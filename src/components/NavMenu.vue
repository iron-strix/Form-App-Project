<script setup>
import { useAuth } from '@/composables/useAuth'

const { isAuthenticated, logout, user } = useAuth()
</script>
<template>
  <nav>
    <div v-show="isAuthenticated">
      <div class="text-center font-serif text-rose-500">
        Welcome, <strong>{{ user?.email }}</strong
        >.
      </div>
      <div class="links">
        <div><RouterLink to="/workspace">Workspace</RouterLink></div>
        <div><RouterLink to="/formList">Forms List</RouterLink></div>
        <div><RouterLink to="/submitted">Submitted</RouterLink></div>
        <div class="links-logout"><RouterLink to="/" @click="logout()">Logout</RouterLink></div>
      </div>
    </div>

    <div v-show="!isAuthenticated">
      <div class="text-center text-4xl font-bold text-white">Helpdesk Form App</div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex h-20 items-center justify-center bg-violet-700/50 text-slate-200;
  .links {
    @apply flex items-center justify-center space-x-4;

    & .router-link-active {
      @apply underline underline-offset-4;
    }
  }

  .links-logout {
    @apply rounded-md bg-rose-700 px-2 py-2 transition duration-100 hover:scale-105 hover:bg-rose-600 hover:font-bold;
  }
}
</style>
