<script setup>
import SubmittedCard from '@/components/SubmittedCard.vue'
import useAPI from '@/composables/useAPI'
import { useAuth } from '@/composables/useAuth'
const { isAuthenticated } = useAuth()
const { getFormResponses, formResponses } = useAPI()
getFormResponses()
//console.log(isAuthenticated)
</script>
<template>
  <main class="flex min-h-screen items-center justify-center">
    <div v-if="isAuthenticated" class="wrapper">
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
