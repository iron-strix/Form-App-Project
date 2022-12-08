<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
import { useRouter, useRoute } from 'vue-router'
//import router from '@/router'

const router = useRouter()
const route = useRoute()

const { login, logout } = useAuth()
const username = ref('')
const password = ref('')

const logUserIn = async () => {
  if (await login(username.value, password.value)) {
    if (route.query.redirect) {
      router.push(route.query.redirect)
    } else {
      router.push({ name: 'Workspace' })
    }
  } else {
    logout()
  }
}
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <form class="login-form" @submit.prevent="logUserIn">
        <input v-model="username" type="text" placeholder="Username" />
        <input v-model="password" type="password" placeholder="Password" />
        <button type="submit" class="rounded-lg bg-green-600 py-4 px-4 hover:bg-emerald-500">Log In</button>
      </form>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.login-form {
  @apply mx-auto flex max-w-md flex-col justify-center gap-4 rounded-md bg-zinc-500 p-8;
  & input {
    @apply rounded-md px-4 py-2 font-sans text-xl ring-1 ring-zinc-700;
  }
}
</style>
