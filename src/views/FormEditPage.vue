<script setup>
import FormEditCard from '@/components/FormEditCard.vue'
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <h1>I'm the Form Edit Page</h1>
    </div>
    <FormEditCard />
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
