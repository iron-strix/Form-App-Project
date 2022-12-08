<script setup>
import SubmittedCard from '@/components/SubmittedCard.vue'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { getFormResponses, formResponses } = useAPI()
getFormResponses()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div class="wrapper">
      <h1>Submitted Form Responses:</h1>
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
  @apply container -mt-40 w-full rounded-lg bg-violet-700/50;

  & h1 {
    @apply p-8 text-center align-top text-4xl font-thin text-white;
  }
}
</style>
