<script setup>
import FormSubmittedView from '@/components/FormSubmittedView.vue'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()
//console.log('hello there')
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <div v-if="isAuthenticated" class="wrapper">
      <Suspense>
        <FormSubmittedView />
        <template #fallback><div>Loading...</div></template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply top-0 flex w-full items-center justify-center;
}
</style>
