<script setup>
import FormEditCard from '@/components/FormEditDocument.vue'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div v-if="isAuthenticated" class="wrapper">
      <Suspense>
        <FormEditCard />
        <template #fallback><div>Loading...</div></template>
      </Suspense>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply top-0 flex;
}
</style>
