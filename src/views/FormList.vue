<script setup>
import FormResponseCard from '@/components/FormResponseCard.vue'
import useAPI from '@/composables/useAPI'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()

const { getForms, forms } = useAPI()
getForms()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center text-center">
    <div v-if="isAuthenticated" class="wrapper">
      <div><h1>Here's a list of forms you can respond to:</h1></div>
      <Suspense>
        <div v-for="form in forms" :key="form.ownerId" class="form-card" :form="form">
          <FormResponseCard :form="form" />
        </div>
        <template #fallback><div>Loading...</div></template>
      </Suspense>
    </div>
  </main>
</template>

<style lang="postcss" scoped>
.wrapper {
  @apply container -mt-40 w-full rounded-lg bg-violet-700/50;

  & h1 {
    @apply p-8 text-center align-top text-4xl font-thin text-white;
  }
}
</style>
