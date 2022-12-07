<script setup>
import FormResponseDocument from '@/components/FormResponseDocument.vue'
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper"></div>
    <Suspense>
      <FormResponseDocument />
      <template #fallback><div>Loading...</div></template>
    </Suspense>
  </main>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply top-0 flex;
}
</style>
