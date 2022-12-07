<script setup>
import SubmittedCard from '@/components/SubmittedCard.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { getFormResponses, formResponses } = useAPI()
getFormResponses()
let trash = ref(formResponses)
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <h1>Submitted Forms Go Here</h1>
      <Suspense>
        <div>
          <SubmittedCard
            v-for="formResponse in formResponses"
            :key="formResponse.ownerId"
            class="form-card"
            :form-response="formResponse"
          />
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
