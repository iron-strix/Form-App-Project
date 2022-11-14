<script setup>
import FormCard from '@/components/SubmittedCard.vue'
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <h1>Submitted Forms Go Here</h1>
      <div class="sub-wrapper">
        <FormCard v-for="n in 8" :key="n" />
      </div>
    </div>
  </main>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply container mx-auto w-full flex-col;

  & h1 {
    @apply p-8 text-center align-top text-6xl font-thin text-slate-800;
  }
}
.sub-wrapper {
  @apply grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4;
}
</style>
