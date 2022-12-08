<script setup>
import FormSubmittedView from '@/components/FormSubmittedView.vue'
//console.log('hello there')
</script>

<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
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
