<script setup>
import FormCard from '@/components/FormCard.vue'
import useAPI from '@/composables/useAPI'

const { localUser, getUser, getForms, forms } = useAPI()
getForms()
getUser()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <Suspense>
        <div>
          <h1 v-if="localUser.email">{{ localUser.email }}'s Forms</h1>

          <div class="sub-wrapper">
            <FormCard v-for="form in forms" :key="form.ownerId" :form="form" />
          </div>
        </div>
        <template #fallback><div>Loading...</div></template>
      </Suspense>
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
