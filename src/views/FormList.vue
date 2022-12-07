<script setup>
import { ref } from 'vue'
import FormResponseCard from '@/components/FormResponseCard.vue'
import { useRouter, useRoute } from 'vue-router'
import useAPI from '@/composables/useAPI'

const router = useRouter()
const route = useRoute()

const { getForms, forms } = useAPI()
getForms()
</script>
<template>
  <main class="flex min-h-screen items-center justify-center bg-gray-600 text-center">
    <div class="wrapper">
      <div>Hello World, this is FormList.vue</div>
      <Suspense>
        <div v-for="form in forms" :key="form.ownerId" class="form-card" :form="form">
          <FormResponseCard :form="form" />
        </div>
        <template #fallback><div>Loading...</div></template>
      </Suspense>
    </div>
  </main>
</template>
