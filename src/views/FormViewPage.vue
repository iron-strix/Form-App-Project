<script setup>
import FormViewCard from '@/components/FormViewCard.vue'
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <h1>I'm the Form View Page</h1>
    </div>
    <FormViewCard />
  </main>
</template>

<style scoped lang="postcss">
.wrapper {
  @apply top-0 flex;
  & h1 {
    @apply absolute inset-x-0 top-10 text-center text-6xl font-thin text-slate-800;
  }
}
</style>
